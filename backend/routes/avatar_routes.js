import express from "express";
const router = express.Router();
import {  isAdmin } from "../middlewares/auth_middleware.js";

import { getAllAvatars } from "../controllers/avatar_controller.js";

router.get("/", getAllAvatars);

export default router;
