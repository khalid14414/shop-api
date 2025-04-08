import path from "path"
import { product } from "./shop.js"
export const getAddProduct =(req,res,next)=>{
    res.render('admin/add-product',{pageTitle:'Add-Product',path:'/admin/add-product'})
}

export const addProduct = (req,res,next)=>{
    const id = Math.random().toString()
    product.push({
        id:id,
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
        imageUrl:req.body.imageUrl
    })
    res.redirect('/')
}

export const getProductView = (req,res,next)=>{
    res.render('admin/product-view',{
        pageTitle:'Admin Product',prods:product, path:'/admin/product-view'
    })
}