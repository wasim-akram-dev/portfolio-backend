import express from "express";
import { BlogsControllers } from "./blogs.controller";

const router = express.Router();

// public
router.get("/", BlogsControllers.getAllBlogs);
router.get("/:slug", BlogsControllers.getBlogBySlug);

export const BlogsRoutes = router;
