import express from "express";
const router = express.Router();
import {
  createOrder,
  verifyPayment,
  getAllPayments,
  getPaymentById
} from "../controllers/payment_controller.js";

router.post("/create", createOrder);
router.post("/verifypay", verifyPayment);
router.get("/", getAllPayments);
router.get("/:payment_id", getPaymentById);

export default router;
