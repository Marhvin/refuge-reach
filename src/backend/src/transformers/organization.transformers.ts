import { Organization as PrismaOrganization } from "@prisma/client";
import {
  Organization,
  OrganizationServiceType,
  OrganizationTags,
} from "../../../shared";

export const organizationTransformer = (
  organization: PrismaOrganization
): Organization => {
  return {
    id: organization.id,
    name: organization.name,
    serviceType: organization.serviceType as OrganizationServiceType[],
    extraFilters: organization.extraFilters as OrganizationTags[],
    website: organization.website,
    description: organization.description,
    address: organization.address,
    coordinates: organization.coordinates,
    hours: organization.hours,
    phoneNumber: organization.phoneNumber,
    servicesOfferedLanguages: organization.servicesOfferedLanguages,
  };
};
