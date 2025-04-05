export const getError = (req,res)=>{
    res.render('404',{pageTitle:"Page not found",path:'/'})
 }