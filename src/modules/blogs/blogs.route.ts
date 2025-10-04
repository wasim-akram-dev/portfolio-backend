import express from "express";
import { body } from "express-validator";
import { requireAuth, requireOwner } from "../../middlewares/auth";
import { validate } from "../../middlewares/validate";
import { BlogsControllers } from "./blogs.controller";

const router = express.Router();

// Public
router.get("/", BlogsControllers.getAllBlogs);
router.get("/:slug", BlogsControllers.getBlogBySlug);

// Protected
router.post(
  "/",
  requireAuth,
  requireOwner,
  body("title").notEmpty(),
  body("slug").notEmpty(),
  body("content").notEmpty(),
  validate,
  BlogsControllers.createBlog
);
router.patch(
  "/:id",
  requireAuth,
  requireOwner,
  BlogsControllers.updateABlogByID
);
router.delete(
  "/:id",
  requireAuth,
  requireOwner,
  BlogsControllers.deleteABlogByID
);

export const BlogsRoutes = router;
