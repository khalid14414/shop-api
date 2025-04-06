import path from 'path'
import { fileURLToPath } from 'url';
import { Router } from "express";
import { getCart, getCheckout, getIndex, getOrder, getProduct } from '../controllers/shop.js';



const __filename = fileURLToPath(import.meta.url)
const __dirname =path.dirname(__filename)

console.log('Dir '+__dirname)
console.log(__filename)

const shopRouter = Router()

shopRouter.get('/', getIndex)

shopRouter.get('/products',getProduct)


shopRouter.get('/cart',getCart)

shopRouter.get('/order',getOrder)

shopRouter.get('/checkout',getCheckout)

export default shopRouter