import express from "express";
const router = express.Router();
import {
  getSpecificProduct,
  getAllProducts,
} from "../controllers/product_controller.js";
import {  isAdmin } from "../middlewares/auth_middleware.js";

router.get("/:product_id",  getSpecificProduct);
router.get("/",  getAllProducts);

export default router;
