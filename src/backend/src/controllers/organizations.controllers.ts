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
      const {
        name,
        serviceTypes,
        tags,
        isPhysicalAddress,
        website,
        description,
        address,
        hours,
        phoneNumber,
        servicesOfferedLanguages,
      } = req.body;

      const organization = await OrganizationsService.createOrganization(
        name,
        serviceTypes,
        tags,
        isPhysicalAddress,
        website,
        description,
        address,
        hours,
        phoneNumber,
        servicesOfferedLanguages
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
      const {
        id,
        name,
        serviceTypes,
        tags,
        isPhysicalAddress,
        website,
        description,
        address,
        hours,
        phoneNumber,
        servicesOfferedLanguages,
      } = req.body;

      const organization = await OrganizationsService.editOrganization(
        id,
        name,
        serviceTypes,
        tags,
        isPhysicalAddress,
        website,
        description,
        address,
        hours,
        phoneNumber,
        servicesOfferedLanguages
      );

      res.status(201).json(organization);
    } catch (err: unknown) {
      next(err);
    }
  }
}
