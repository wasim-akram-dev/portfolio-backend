import cors from "cors";
import express from "express";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Portfolio assignment backend server is running!!");
});

// Handler: Route Not Found
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;
