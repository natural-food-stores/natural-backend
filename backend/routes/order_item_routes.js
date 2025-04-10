import express from "express";
const router = express.Router({ mergeParams: true });

import {  isAdmin } from "../middlewares/auth_middleware.js";

import { getAllOrderItemsOfUser } from "../controllers/order_item_controller.js";

router.get("/", getAllOrderItemsOfUser);

export default router;
