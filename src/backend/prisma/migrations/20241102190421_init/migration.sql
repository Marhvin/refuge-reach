-- CreateEnum
CREATE TYPE "OrganizationServiceType" AS ENUM ('EDUCATION', 'LEGAL', 'HOUSING', 'HEALTHCARE', 'FOOD', 'EMPLOYMENT');

-- CreateEnum
CREATE TYPE "OrganizationTags" AS ENUM ('PARKING_AVAILABLE', 'MBTA_ACCESSIBLE', 'WHEELCHAIR_ACCESSIBLE', 'LGBTQ_FRIENDLY', 'DIGITAL_RESOURCES_ONLY');

-- CreateTable
CREATE TABLE "Organization" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "serviceType" "OrganizationServiceType"[],
    "extraFilters" "OrganizationTags"[],
    "website" TEXT,
    "description" TEXT,
    "address" TEXT,
    "coordinates" TEXT,
    "hours" TEXT,
    "phoneNumber" TEXT,
    "servicesOfferedLanguages" TEXT,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);
