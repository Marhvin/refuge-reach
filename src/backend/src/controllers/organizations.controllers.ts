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
}
