import {
  Organization as PrismaOrganization,
  OrganizationServiceType as PrismaOrganizationServiceType,
  OrganizationTags as PrismaOrganizationTags,
} from "@prisma/client";
import {
  Organization,
  OrganizationServiceType,
  OrganizationTags,
} from "../../../shared";
import { HttpException } from "../utils/error.utils";

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
    isPhysicalAddress: organization.isPhysicalAddress,
    hours: organization.hours,
    phoneNumber: organization.phoneNumber,
    servicesOfferedLanguages: organization.servicesOfferedLanguages,
  };
};

export const stringToServiceType = (
  serviceType: string
): PrismaOrganizationServiceType => {
  switch (serviceType) {
    case "EDUCATION":
      return PrismaOrganizationServiceType.EDUCATION;
    case "LEGAL":
      return PrismaOrganizationServiceType.LEGAL;
    case "HOUSING":
      return PrismaOrganizationServiceType.HOUSING;
    case "HEALTHCARE":
      return PrismaOrganizationServiceType.HEALTHCARE;
    case "FOOD":
      return PrismaOrganizationServiceType.FOOD;
    case "EMPLOYMENT":
      return PrismaOrganizationServiceType.EMPLOYMENT;
    case "MENTAL_HEALTH":
      return PrismaOrganizationServiceType.MENTAL_HEALTH;
    default:
      throw new HttpException(400, `Invalid service type: ${serviceType}`);
  }
};

export const stringToOrganizationTag = (
  tag: string
): PrismaOrganizationTags => {
  switch (tag) {
    case "PARKING_AVAILABLE":
      return PrismaOrganizationTags.PARKING_AVAILABLE;
    case "MBTA_ACCESSIBLE":
      return PrismaOrganizationTags.MBTA_ACCESSIBLE;
    case "WHEELCHAIR_ACCESSIBLE":
      return PrismaOrganizationTags.WHEELCHAIR_ACCESSIBLE;
    case "LGBTQ_FRIENDLY":
      return PrismaOrganizationTags.LGBTQ_FRIENDLY;
    case "DIGITAL_RESOURCES_ONLY":
      return PrismaOrganizationTags.DIGITAL_RESOURCES_ONLY;
    default:
      throw new HttpException(400, `Invalid organization tag: ${tag}`);
  }
};
