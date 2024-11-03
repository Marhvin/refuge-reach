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
    const organizations = await prisma.organization.findMany();

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
    const owner = await getUserFromIdToken(idToken);
    const isOwnerAdmin = isAdmin(owner.email);
    if (!isOwnerAdmin)
      throw new AccessDeniedException(
        403,
        "Only admins can create organizations"
      );

    let addressCoordinates: string | null = null;
    if (isPhysicalAddress && isPhysicalAddress === true) {
      if (!address)
        throw new HttpException(400, "Physical address is required");
      else {
        try {
          addressCoordinates = await addressTransformer(address);
        } catch (error) {
          console.log("Failed to geocode address", error);
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
}
