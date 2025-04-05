import path from 'path'
import { fileURLToPath } from 'url';
import { Router } from "express";
import { getProduct } from '../controllers/products.js';



const __filename = fileURLToPath(import.meta.url)
const __dirname =path.dirname(__filename)

console.log('Dir '+__dirname)
console.log(__filename)

const shopRouter = Router()

shopRouter.get('/', getProduct)

export default shopRouter