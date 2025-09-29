import { prisma } from "../../config/db";

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

export const BlogsServices = { getAllBlogs, getBlogBySlug };
