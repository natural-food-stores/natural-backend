import express from "express";
const router = express.Router({ mergeParams: true });
import {
  getAllProductsOfCategory,
  getSpecificProductOfCategory,
} from "../controllers/category_product_controller.js";
import {  isAdmin } from "../middlewares/auth_middleware.js";

router.get("/",  getAllProductsOfCategory);
router.get("/:product_id", getSpecificProductOfCategory);

export default router;
