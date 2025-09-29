import cors from "cors";
import express from "express";
import { errorHandler } from "./middlewares/errorHandler";
import { notFound } from "./middlewares/notFound";
import { BlogsRoutes } from "./modules/blogs/blogs.route";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/v1/blogs", BlogsRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio assignment backend server is running!!");
});

app.use(errorHandler);
app.use(notFound);

export default app;
