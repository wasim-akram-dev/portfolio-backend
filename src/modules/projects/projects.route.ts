import express from "express";
import { body } from "express-validator";
import { requireAuth, requireOwner } from "../../middlewares/auth";
import { validate } from "../../middlewares/validate";
import { ProjectsControllers } from "./projects.controller";

const router = express.Router();

// public
router.get("/", ProjectsControllers.getAllProjects);
router.get("/:slug", ProjectsControllers.getProjectBySlug);

// Protected
router.post(
  "/",
  requireAuth,
  requireOwner,
  body("title").notEmpty(),
  body("slug").notEmpty(),
  body("description").notEmpty(),
  validate,
  ProjectsControllers.createProject
);

router.patch(
  "/:id",
  requireAuth,
  requireOwner,
  ProjectsControllers.updateAProjectByID
);
router.delete(
  "/:id",
  requireAuth,
  requireOwner,
  ProjectsControllers.deleteAProjectByID
);

export const ProjectsRoutes = router;
