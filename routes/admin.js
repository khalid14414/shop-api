import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { addProduct, getAddProduct } from "../controllers/products.js";

const adminRouter = Router()

// const __filename = fileURLToPath(import.meta.url)
// const __dirname =path.dirname(__filename)



adminRouter.get('/add-product', getAddProduct)

adminRouter.post('/add-product', addProduct)

export  default adminRouter