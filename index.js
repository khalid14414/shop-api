import express from 'express'
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url'
import path from 'path'

import adminRouter from './routes/admin.js'
import shopRouter from './routes/shop.js'
import { getError } from './controllers/error.js'

const app = express()

app.set('view engine','ejs')
app.set('views','views')

const __filename= fileURLToPath(import.meta.url)
const __dirname= path.dirname(__filename)

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))


app.use('/admin',adminRouter)
app.use(shopRouter)

app.use(getError)

app.listen(8000,()=>{
    console.log('Hiiiiii')
})