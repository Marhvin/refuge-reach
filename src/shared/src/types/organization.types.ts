export enum OrganizationServiceType {
  EDUCATION = "EDUCATION",
  LEGAL = "LEGAL",
  HOUSING = "HOUSING",
  HEALTHCARE = "HEALTHCARE",
  FOOD = "FOOD",
  EMPLOYMENT = "EMPLOYMENT",
  MENTAL_HEALTH = "MENTAL_HEALTH",
}

export enum OrganizationTags {
  PARKING_AVAILABLE = "PARKING_AVAILABLE",
  MBTA_ACCESSIBLE = "MBTA_ACCESSIBLE",
  WHEELCHAIR_ACCESSIBLE = "WHEELCHAIR_ACCESSIBLE",
  LGBTQ_FRIENDLY = "LGBTQ_FRIENDLY",
  DIGITAL_RESOURCES_ONLY = "DIGITAL_RESOURCES_ONLY",
}

export interface Organization {
  id: string;
  name: string;
  serviceType: OrganizationServiceType[];
  extraFilters: OrganizationTags[];
  website?: string;
  description?: string;
  address?: string;
  coordinates?: string;
  hours?: string;
  phoneNumber?: string;
  servicesOfferedLanguages?: string;
}
