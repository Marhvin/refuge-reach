import {
  organizationTransformer,
  stringToOrganizationTag,
  stringToServiceType,
} from "../transformers/organization.transformers";
import prisma from "../prisma/prisma";
import { Organization } from "../../../shared";
import { AccessDeniedException, HttpException } from "../utils/error.utils";
import { getUserFromIdToken, isAdmin } from "../utils/user.utils";
import { addressTransformer } from "../utils/locations.utils";

export default class OrganizationsService {
  static async getOrganizations(): Promise<Organization[]> {
    const organizations = await prisma.organization.findMany({
      where: { dateDeleted: null },
    });

    return organizations.map(organizationTransformer);
  }

  static async createOrganization(
    idToken: string,
    name: string,
    serviceType: string[],
    extraFilters: string[],
    isPhysicalAddress: boolean,
    website?: string,
    description?: string,
    address?: string,
    hours?: string,
    phoneNumber?: string,
    servicesOfferedLanguages?: string
  ): Promise<Organization> {
    const user = await getUserFromIdToken(idToken);
    const isUserAdmin = isAdmin(user.email);
    if (!isUserAdmin)
      throw new AccessDeniedException(
        403,
        "Only admins can create organizations"
      );

    let addressCoordinates: string | null = null;
    if (isPhysicalAddress && isPhysicalAddress === true) {
      // If the organization is marked as being a physical address, but doesn't have an address
      if (!address)
        throw new HttpException(400, "Physical address is required");
      else {
        try {
          addressCoordinates = await addressTransformer(address);
        } catch (error) {
          throw new HttpException(400, "Failed to geocode address");
        }
      }
    }

    try {
      const serviceTypesPrisma = serviceType.map(stringToServiceType);
      const tagsPrisma =
        extraFilters && extraFilters.length > 0
          ? extraFilters.map(stringToOrganizationTag)
          : [];

      const organization = await prisma.organization.create({
        data: {
          name,
          serviceType: serviceTypesPrisma,
          extraFilters: tagsPrisma,
          isPhysicalAddress,
          website,
          description,
          address,
          coordinates: addressCoordinates,
          hours,
          phoneNumber,
          servicesOfferedLanguages,
        },
      });

      return organizationTransformer(organization);
    } catch {
      throw new HttpException(400, "Failed to create organization");
    }
  }

  static async editOrganization(
    idToken: string,
    id: string,
    name: string,
    serviceTypes: string[],
    tags: string[],
    isPhysicalAddress: boolean,
    website?: string,
    description?: string,
    address?: string,
    hours?: string,
    phoneNumber?: string,
    servicesOfferedLanguages?: string
  ): Promise<Organization> {
    const organization = await prisma.organization.findUnique({
      where: { id },
    });
    if (!organization)
      throw new HttpException(404, `Organization with id ${id} not found`);

    const user = await getUserFromIdToken(idToken);
    const isUserAdmin = isAdmin(user.email);
    if (!isUserAdmin)
      throw new AccessDeniedException(
        403,
        "Only admins can edit organizations"
      );

    let addressCoordinates: string | null = null;
    if (isPhysicalAddress && isPhysicalAddress === true) {
      if (!address)
        throw new HttpException(400, "Physical address is required");
      else if (address !== organization.address) {
        // Only update the coordinates if the address has changed
        try {
          addressCoordinates = await addressTransformer(address);
        } catch (error) {
          console.log("Failed to geocode address", error);
          throw new HttpException(400, "Failed to geocode address");
        }
      }
    }

    try {
      const serviceTypesPrisma = serviceTypes.map(stringToServiceType);
      const tagsPrisma = tags.map(stringToOrganizationTag);

      const updatedOrganization = await prisma.organization.update({
        where: { id },
        data: {
          name,
          serviceType: serviceTypesPrisma,
          extraFilters: tagsPrisma,
          isPhysicalAddress,
          website,
          description,
          address,
          coordinates: addressCoordinates,
          hours,
          phoneNumber,
          servicesOfferedLanguages,
        },
      });

      return organizationTransformer(updatedOrganization);
    } catch {
      throw new HttpException(
        400,
        `Failed to edit organization with id: ${id}`
      );
    }
  }

  static async deleteOrganization(idToken: string, id: string) {
    const organization = await prisma.organization.findUnique({
      where: { id },
    });
    if (!organization)
      throw new HttpException(404, `Organization with id ${id} not found`);
    if (organization.dateDeleted)
      throw new HttpException(
        404,
        `Organization with id ${id} is already deleted`
      );

    const user = await getUserFromIdToken(idToken);
    const isUserAdmin = isAdmin(user.email);
    if (!isUserAdmin)
      throw new AccessDeniedException(
        403,
        "Only admins can delete organizations"
      );

    await prisma.organization.update({
      where: { id },
      data: { dateDeleted: new Date(), deletedByUserId: user.id },
    });
  }
}
