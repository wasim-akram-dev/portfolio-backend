import { Prisma, Project } from "@prisma/client";
import { prisma } from "../../config/db";

const createProject = async (
  payload: Prisma.ProjectCreateInput
): Promise<Project> => {
  const createdProject = await prisma.project.create({
    data: payload,
  });

  return createdProject;
};

const getAllProjects = async () => {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });
  return projects;
};

const getProjectBySlug = async (slug: string) => {
  const project = await prisma.project.findUnique({ where: { slug } });
  return project;
};

const updateAProjectByID = async (id: number, payload: Partial<Project>) => {
  const updatedProject = await prisma.project.update({
    where: {
      id,
    },
    data: payload,
  });
  return updatedProject;
};

const deleteAProjectByID = async (id: number) => {
  const deletedProject = await prisma.project.delete({
    where: {
      id,
    },
  });
  return deletedProject;
};

export const ProjectsServices = {
  createProject,
  getAllProjects,
  getProjectBySlug,
  updateAProjectByID,
  deleteAProjectByID,
};
