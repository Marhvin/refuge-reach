import { Router } from "express";
import OrganizationsController from "../controllers/organizations.controllers";

const organizationsRouter = Router();

organizationsRouter.get("/", OrganizationsController.getOrganizations);

organizationsRouter.post("/new", OrganizationsController.createOrganization);
organizationsRouter.post("/:id/edit", OrganizationsController.editOrganization);
organizationsRouter.post(
  "/:id/delete",
  OrganizationsController.deleteOrganization
);

export default organizationsRouter;
