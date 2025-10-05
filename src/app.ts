import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { errorHandler } from "./middlewares/errorHandler";
import { notFound } from "./middlewares/notFound";
import { AuthRoutes } from "./modules/auth/auth.route";
import { BlogsRoutes } from "./modules/blogs/blogs.route";
import { ProjectsRoutes } from "./modules/projects/projects.route";

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "https://wasim-akram.vercel.app", // frontend
      "http://localhost:3000", // for local dev
    ],
    credentials: true, // important: allows cookies
  })
);

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/blogs", BlogsRoutes);
app.use("/api/v1/projects", ProjectsRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio assignment backend server is running!!");
});

app.use(errorHandler);
app.use(notFound);

export default app;
