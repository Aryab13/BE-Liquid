import express from "express";
import { createProduct, getProducts, upload } from "../controllers/productController.js";

const router = express.Router();

router.post("/products", upload.single("gambar"), createProduct);
router.get("/products", getProducts);

export default router;
