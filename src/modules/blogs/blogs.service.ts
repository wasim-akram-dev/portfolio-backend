import { Blog, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createBlog = async (payload: Prisma.BlogCreateInput): Promise<Blog> => {
  const createdBlog = await prisma.blog.create({
    data: payload,
  });

  return createdBlog;
};

const getAllBlogs = async () => {
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
  });
  return blogs;
};

const getBlogBySlug = async (slug: string) => {
  const blog = await prisma.blog.findUnique({ where: { slug } });
  return blog;
};

const updateABlogByID = async (id: number, payload: Partial<Blog>) => {
  const updatedBlog = await prisma.blog.update({
    where: {
      id,
    },
    data: payload,
  });
  return updatedBlog;
};

const deleteABlogByID = async (id: number) => {
  const deletedBlog = await prisma.blog.delete({
    where: {
      id,
    },
  });
  return deletedBlog;
};

export const BlogsServices = {
  createBlog,
  getAllBlogs,
  getBlogBySlug,
  updateABlogByID,
  deleteABlogByID,
};
