import dotenv from "dotenv";
import { Server } from "http";
import app from "./app";
import { prisma } from "./config/db";

dotenv.config();

let server: Server;

async function connectToDB() {
  try {
    await prisma.$connect();
    console.log(`Database is connected successfully`);
  } catch (error) {
    console.log(`There was an error happened to connect database`);
    process.exit(1);
  }
}

const startServer = async () => {
  try {
    await connectToDB();
    server = app.listen(process.env.PORT, () => {
      console.log(
        `Portfolio assignment backend server is listening on port ${process.env.PORT}`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  await startServer();
})();

//1. HANDLE : Unhandled Rejection Error
process.on("unhandledRejection", (error) => {
  console.log(
    "Unhandled Rejection Detected! Server is Shutting Down...",
    error
  );
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// CHECKING WAY : Unhandled Rejection Error
// Promise.reject(new Error("I forgot to catch this promise"));

//2. HANDLE : Uncaught Exception Error
process.on("uncaughtException", (error) => {
  console.log("Uncaught Exception Detected! Server is Shutting Down...", error);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// CHECKING WAY : Uncaught Exception Error
// throw new Error("I forgot to handle this local development code error");

//3. HANDLE : Signal Termination (SIGTERM) [If cloud server service provider send signal for stop the server]
process.on("SIGTERM", () => {
  console.log("SIGTERM Signal Received! Server is Shutting Down...");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// CHECKING WAY : Signal Termination (SIGTERM)
//

//4. HANDLE : Signal Initialize (SIGINT) [If we are manually want to stop the server with gracefully]
process.on("SIGINT", () => {
  console.log("SIGINT Signal Received! Server is Shutting Down...");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// CHECKING WAY : Signal INT (SIGINT)
//
