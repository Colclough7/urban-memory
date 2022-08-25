import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import path from 'path'
import {dirname} from 'path'
import { fileURLToPath } from 'url'
import userRoutes from './server/routes/router.js'
import {connectDB} from './server/database/connection.js'
import cors from 'cors'
const app = express()
dotenv.config()
const PORT = process.env.PORT || 3000
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(cors())
connectDB()
//log requests
app.use(morgan('tiny'))
//parse request to body-parser

app.use(bodyParser.urlencoded({extended: true}))
//set view engine
app.set('view engine', 'ejs')
//load assets
app.use('/css',express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img',express.static(path.resolve(__dirname, 'assets/css')))
app.use('/js',express.static(path.resolve(__dirname, 'assets/css')))



app.use('/', userRoutes)





app.listen(PORT,()=> console.log(`server running on port http://localhost:${PORT}`))


