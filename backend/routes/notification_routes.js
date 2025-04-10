import express from "express";
const router = express.Router();
import {  isAdmin } from "../middlewares/auth_middleware.js";

import { getAllNotifications } from "../controllers/notification_controller.js";

router.get("/", getAllNotifications);

export default router;
