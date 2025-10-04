// import { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: { userId: number; role: string };
}

// export const requireAuth = (
//   req: AuthRequest,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const token =
//       req.cookies?.token || req.headers.authorization?.split(" ")[1];
//     if (!token) return res.status(401).json({ message: "Not authenticated" });

//     const payload = jwt.verify(
//       token,
//       process.env.JWT_SECRET || "secret"
//     ) as any;
//     req.user = { userId: payload.userId, role: payload.role };
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };

// export const requireOwner = (
//   req: AuthRequest,
//   res: Response,
//   next: NextFunction
// ) => {
//   if (!req.user) return res.status(401).json({ message: "Not authenticated" });
//   if (req.user.role !== "OWNER")
//     return res.status(403).json({ message: "Forbidden" });
//   next();
// };

import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const prisma = new PrismaClient();

interface CustomJwtPayload extends JwtPayload {
  userId: string;
  role: string;
}

// Middleware to verify JWT from cookies
export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({ message: "No token, unauthorized" });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "secret"
    ) as CustomJwtPayload;

    const abc = parseInt(decoded.userId);

    // Fetch user from DB
    const user = await prisma.user.findUnique({
      where: { id: abc },
      select: { id: true, email: true, role: true },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Attach user to request object
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    req.user = user;

    next();
  } catch (err) {
    console.error("Auth middleware error:", err);
    return res.status(401).json({ message: "Unauthorized or invalid token" });
  }
};

export const requireOwner = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) return res.status(401).json({ message: "Not authenticated" });
  if (req.user.role !== "OWNER")
    return res.status(403).json({ message: "Forbidden" });
  next();
};
