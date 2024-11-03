import {
  organizationTransformer,
  stringToOrganizationTag,
  stringToServiceType,
} from "../transformers/organization.transformers";
import prisma from "../prisma/prisma";
import { Organization } from "../../../shared";
import { HttpException } from "../utils/error.utils";

export default class OrganizationsService {
  static async getOrganizations(): Promise<Organization[]> {
    const organizations = await prisma.organization.findMany();

    return organizations.map(organizationTransformer);
  }

  static async createOrganization(
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
    // TODO: Check if the user has auth to create an organization

    try {
      const serviceTypesPrisma = serviceType.map(stringToServiceType);
      const tagsPrisma = extraFilters.map(stringToOrganizationTag);

      const organization = await prisma.organization.create({
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
