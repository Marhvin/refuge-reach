import { Request, Response, NextFunction } from "express";
import OrganizationsService from "../services/organizations.services";

export default class OrganizationsController {
  static async getOrganizations(
    _req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const organizations = await OrganizationsService.getOrganizations();
      res.status(200).json(organizations);
    } catch (err: unknown) {
      next(err);
    }
  }

  static async createOrganization(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { idToken } = req.cookies;
      const {
        name,
        serviceType,
        extraFilters,
        isPhysicalAddress,
        website,
        description,
        address,
        hours,
        phoneNumber,
        servicesOfferedLanguages,
      } = req.body;

      const organization = await OrganizationsService.createOrganization(
        idToken,
        name,
        serviceType,
        extraFilters || null,
        isPhysicalAddress,
        website || null,
        description || null,
        address || null,
        hours || null,
        phoneNumber || null,
        servicesOfferedLanguages || null
      );

      res.status(201).json(organization);
    } catch (err: unknown) {
      next(err);
    }
  }

  static async editOrganization(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { idToken } = req.cookies;
      const { id } = req.params;
      const {
        name,
        serviceType,
        extraFilters,
        isPhysicalAddress,
        website,
        description,
        address,
        hours,
        phoneNumber,
        servicesOfferedLanguages,
      } = req.body;

      const organization = await OrganizationsService.editOrganization(
        idToken,
        id,
        name,
        serviceType,
        extraFilters || null,
        isPhysicalAddress,
        website || null,
        description || null,
        address || null,
        hours || null,
        phoneNumber || null,
        servicesOfferedLanguages || null
      );

      res.status(201).json(organization);
    } catch (err: unknown) {
      next(err);
    }
  }

  static async deleteOrganization(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { idToken } = req.cookies;
      const { id } = req.params;

      await OrganizationsService.deleteOrganization(idToken, id);

      res.status(201).json();
    } catch (err: unknown) {
      next(err);
    }
  }
}
