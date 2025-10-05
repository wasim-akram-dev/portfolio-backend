import { Request, Response } from "express";
import { ProjectsServices } from "./projects.service";

const createProject = async (req: Request, res: Response) => {
  try {
    const result = await ProjectsServices.createProject(req.body);
    res.status(201).json({
      success: true,
      message: `Project created Successfully`,
      project: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await ProjectsServices.getAllProjects();
    res.status(200).json({
      success: true,
      message: "Retrieved all projects successfully",
      projects,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `${error}`,
    });
  }
};

const getProjectBySlug = async (req: Request, res: Response) => {
  try {
    const slug = req.params.slug;
    const project = await ProjectsServices.getProjectBySlug(String(slug));
    if (!project) return res.status(404).json({ message: "Not found" });
    res.status(200).json({
      success: true,
      message: "Project Retrieved successfully",
      project,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `${error}`,
    });
  }
};

const updateAProjectByID = async (req: Request, res: Response) => {
  try {
    const updatedProject = await ProjectsServices.updateAProjectByID(
      Number(req.params.id),
      req.body
    );
    res.status(200).json({
      success: true,
      message: `Project Updated Successfully`,
      updatedProject,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Invalid ID`,
    });
  }
};

const deleteAProjectByID = async (req: Request, res: Response) => {
  try {
    const deletedProject = await ProjectsServices.deleteAProjectByID(
      Number(req.params.id)
    );
    res.status(200).json({
      success: true,
      message: `Project deleted Successfully`,
      deletedProject,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Invalid ID`,
    });
  }
};

export const ProjectsControllers = {
  createProject,
  getAllProjects,
  getProjectBySlug,
  updateAProjectByID,
  deleteAProjectByID,
};
