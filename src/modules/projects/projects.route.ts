import express from "express";
import { ProjectsControllers } from "./projects.controller";

const router = express.Router();

// public
router.post("/", ProjectsControllers.createProject);
router.get("/", ProjectsControllers.getAllProjects);
router.get("/:slug", ProjectsControllers.getProjectBySlug);

export const ProjectsRoutes = router;
