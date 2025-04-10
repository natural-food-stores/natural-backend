import db from "../config/db_connect.js";
import asyncHandler from "express-async-handler";
import handleError from "../utils/error_handler.js";
import crypto from "crypto";
import Razorpay from "razorpay";
import dotenv from "dotenv";

dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createOrder = asyncHandler(async (req, res) => {
  try {
    const { amount, currency, user_id } = req.body;
    
    const options = {
      amount: amount * 100, // Convert to paise
      currency,
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    
    const paymentRecord = await db.payment.create({
      order_id: order.id,
      amount,
      currency,
      status: "created",
      user_id,
    });

    return res.json({
      code: 200,
      status: true,
      message: "Order created successfully",
      result: order,
    });
  } catch (err) {
    handleError(err, res);
  }
});

const verifyPayment = asyncHandler(async (req, res) => {
  try {
    const { order_id, payment_id, signature } = req.body;
    const body = order_id + "|" + payment_id;
    
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");
    
    if (expectedSignature === signature) {
      await db.payment.update(
        { status: "successful", payment_id, signature },
        { where: { order_id } }
      );
      return res.json({
        code: 200,
        status: true,
        message: "Payment verified successfully",
      });
    } else {
      return res.json({
        code: 400,
        status: false,
        message: "Payment verification failed",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

const getAllPayments = asyncHandler(async (req, res) => {
  try {
    const payments = await db.payment.findAll();
    return res.json({
      code: 200,
      status: true,
      message: "Payments retrieved successfully",
      result: payments,
    });
  } catch (err) {
    handleError(err, res);
  }
});

const getPaymentById = asyncHandler(async (req, res) => {
  const { payment_id } = req.params;
  try {
    const payment = await db.payment.findOne({ where: { payment_id } });
    if (payment) {
      return res.json({
        code: 200,
        status: true,
        message: "Payment found successfully",
        result: payment,
      });
    } else {
      return res.json({
        code: 404,
        status: false,
        message: "Payment not found",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

export { createOrder, verifyPayment, getAllPayments, getPaymentById };
