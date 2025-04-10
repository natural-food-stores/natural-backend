import express from "express";
const router = express.Router();
import {  isAdmin } from "../middlewares/auth_middleware.js";

import { getAllCartItemsOfUser } from "../controllers/cart_controller.js";

router.get("/",  getAllCartItemsOfUser);

export default router;
