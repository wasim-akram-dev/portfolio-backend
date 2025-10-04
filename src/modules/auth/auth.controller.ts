import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import jwt, { Secret, SignOptions } from "jsonwebtoken";

const prisma = new PrismaClient();

// ---------------------------
// Login Controller
// ---------------------------
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Payload and secret setup
    const payload = { userId: user.id, role: user.role };
    const secret: Secret = (process.env.JWT_SECRET as string) || "secret";

    const options: SignOptions = {
      expiresIn:
        (process.env.JWT_EXPIRES_IN as SignOptions["expiresIn"]) || "7d",
    };

    // Sign JWT token
    const token = jwt.sign(payload, secret, options);

    // Send token via HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.json({
      message: "Logged in",
      user: { id: user.id, email: user.email, role: user.role },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

// ---------------------------
// Logout Controller
// ---------------------------
export const logout = async (req: Request, res: Response) => {
  res.clearCookie("token");
  return res.json({ message: "Logged out" });
};

// ---------------------------
// Me Controller
// ---------------------------
export const me = async (req: Request, res: Response) => {
  // requireAuth middleware should attach user to req.user
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  return res.json({ user });
};
