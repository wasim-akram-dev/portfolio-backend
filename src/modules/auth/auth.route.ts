import { requireAuth } from "../../middlewares/auth";
import { login, logout, me } from "./auth.controller";

import express from "express";

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);
router.get("/me", requireAuth, me);
// router.get("/me", me);

export const AuthRoutes = router;
