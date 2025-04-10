import express from "express";
const router = express.Router();
import {  isAdmin } from "../middlewares/auth_middleware.js";

import { getHomeDetail } from "../controllers/home_controller.js";

router.get("/", getHomeDetail);

export default router;
