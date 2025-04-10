import express from "express";
const router = express.Router();
import {  isAdmin } from "../middlewares/auth_middleware.js";
import { adminLogin } from "../controllers/admin_controller.js";

import {
  getAllUsers,
  deleteUserDetails,
  updateUserDetails,
} from "../controllers/user_controller.js";

import {
  createCategory,
  deleteSpecificCategory,
  updateCategory,
} from "../controllers/category_controller.js";

import {
  createProduct,
  deleteSpecificProduct,
  updateProduct,
} from "../controllers/product_controller.js";

import { getUserDetails } from "../controllers/user_controller.js";

router.post("/login", adminLogin);
//router.post("/users/register",  isAdmin, createUser);
router.get("/users/",  isAdmin, getAllUsers);
router.get("/users/:user_id",  isAdmin, getUserDetails);
router.delete("/users/:user_id",  isAdmin, deleteUserDetails);
router.put("/users/:user_id",  isAdmin, updateUserDetails);

router.post("/categories",  isAdmin, createCategory);
router.delete(
  "/categories/:cat_id",
  
  isAdmin,
  deleteSpecificCategory
);
router.put("/categories/:cat_id",  isAdmin, updateCategory);

router.post("/products/",  isAdmin, createProduct);
router.delete(
  "/products/:product_id",
  
  isAdmin,
  deleteSpecificProduct
);
router.put("/products/:product_id",  isAdmin, updateProduct);

export default router;
