import path from "path";

export const product = [];


export const getProduct = (req, res, next) => {
    console.log(product)
    res.render('shop/product-list', { pageTitle: 'All Product', prods: product, path: '/products' })

}


export const getProducts = (req,res,next)=>{
    const id = req.params.id
    console.log(id)
    res.redirect('/')
}

export const getIndex = (req, res, next) => {
    console.log(product)
    res.render('shop/index', { pageTitle: 'Shop', prods: product, path: '/' })
}

export const getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart', path: '/cart'
    })
}

export const getOrder = (req,res,next)=>{
    res.render('shop/order',{
        pageTitle:'Order',path:'/order'
    })
}


export const getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout', path: '/checkout'
    })
}