import { Router } from "express";
import OrganizationsController from "../controllers/organizations.controllers";

const organizationsRouter = Router();

organizationsRouter.get("/", OrganizationsController.getOrganizations);

export default organizationsRouter;
