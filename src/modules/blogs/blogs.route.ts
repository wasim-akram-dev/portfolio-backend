import express from "express";
import { BlogsControllers } from "./blogs.controller";

const router = express.Router();

// public
router.post("/", BlogsControllers.createBlog);
router.get("/", BlogsControllers.getAllBlogs);
router.get("/:slug", BlogsControllers.getBlogBySlug);
router.patch("/:id", BlogsControllers.updateABlogByID);
router.delete("/:id", BlogsControllers.deleteABlogByID);

export const BlogsRoutes = router;
