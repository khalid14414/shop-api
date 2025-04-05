const product = [];

export const getAddProduct =(req,res,next)=>{
    res.render('add-product',{pageTitle:'add-product',path:'admin/add-product'})
}

export const addProduct = (req,res,next)=>{
    product.push({title:req.body.title})
    res.redirect('/')
 }

 export const getProduct = (req,res,next)=>{
    console.log(product)
    res.render('shop',{pageTitle:'shop',prods:product, path:'/'})
    
}