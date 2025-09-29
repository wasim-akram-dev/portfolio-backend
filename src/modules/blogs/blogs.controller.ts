import { Request, Response } from "express";
import { BlogsServices } from "./blogs.service";

const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await BlogsServices.getAllBlogs();
    res.status(200).json({
      success: true,
      message: "Retrieved all blogs successfully",
      blogs,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `${error}`,
    });
  }
};

const getBlogBySlug = async (req: Request, res: Response) => {
  try {
    const slug = req.params.slug;
    const blog = await BlogsServices.getBlogBySlug(String(slug));
    if (!blog) return res.status(404).json({ message: "Not found" });
    res.status(200).json({
      success: true,
      message: "Retrieved all blogs successfully",
      blog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `${error}`,
    });
  }
};

export const BlogsControllers = { getAllBlogs, getBlogBySlug };
