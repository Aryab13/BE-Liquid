import Product from "../models/product.js";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export const createProduct = async (req, res) => {
  try {
    const { Nama, stok, price } = req.body;
    const gambar = req.file ? `/public/images/${req.file.filename}` : null;

    const product = await Product.create({ Nama, gambar, stok, price });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { upload };
