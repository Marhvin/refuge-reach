import { organizationTransformer } from "../transformers/organization.transformers";
import prisma from "../prisma/prisma";
import { Organization } from "../../../shared";

export default class OrganizationsService {
  static async getOrganizations(): Promise<Organization[]> {
    const organizations = await prisma.organization.findMany();

    return organizations.map(organizationTransformer);
  }
}
