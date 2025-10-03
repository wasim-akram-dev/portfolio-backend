import { Request, Response } from "express";
import { BlogsServices } from "./blogs.service";

const createBlog = async (req: Request, res: Response) => {
  try {
    const result = await BlogsServices.createBlog(req.body);
    res.status(201).json({
      success: true,
      message: `Blog created Successfully`,
      blog: result,
    });
  } catch (error) {
    console.log(error);
  }
};

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
      message: "Blog Retrieved successfully",
      blog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `${error}`,
    });
  }
};

const updateABlogByID = async (req: Request, res: Response) => {
  try {
    const updatedBlog = await BlogsServices.updateABlogByID(
      Number(req.params.id),
      req.body
    );
    res.status(200).json({
      success: true,
      message: `Blog Updated Successfully`,
      updatedBlog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Invalid ID`,
    });
  }
};

const deleteABlogByID = async (req: Request, res: Response) => {
  try {
    const deletedBlog = await BlogsServices.deleteABlogByID(
      Number(req.params.id)
    );
    res.status(200).json({
      success: true,
      message: `Blog deleted Successfully`,
      deletedBlog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Invalid ID`,
    });
  }
};

export const BlogsControllers = {
  createBlog,
  getAllBlogs,
  getBlogBySlug,
  updateABlogByID,
  deleteABlogByID,
};
