import express from "express";
const router = express.Router({ mergeParams: true });

import {  isAdmin } from "../middlewares/auth_middleware.js";

import {
  getAllOrdersOfUser,
  createOrder,
  createOrderItems,
} from "../controllers/order_controller.js";

router.get("/",  getAllOrdersOfUser);
router.post("/",  createOrder);
router.post("/:order_id",  createOrderItems);

export default router;
