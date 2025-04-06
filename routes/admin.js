import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { addProduct, getAddProduct, getProductView } from "../controllers/admin.js";

const adminRouter = Router()

// const __filename = fileURLToPath(import.meta.url)
// const __dirname =path.dirname(__filename)



adminRouter.get('/add-product', getAddProduct)

adminRouter.get('/product-view', getProductView)

adminRouter.post('/add-product', addProduct)

export  default adminRouter