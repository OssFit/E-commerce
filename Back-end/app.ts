import express from 'express';
import cookieParser from 'cookie-parser'
import errorHandlerMiddleware from './middlewares/error';
const bodyParser = require('body-parser');
const app=express();


app.use(express.json())
app.use(cookieParser())
app.use(express.static('uploads'))
app.use(bodyParser.urlencoded({extended:true,limit:'50mb'}))


if(process.env.NODE_ENV!== "PRODUCTION"){
    require("dotenv").config({
        path:"/Back-end/config/.env"
    })
}
app.use(errorHandlerMiddleware)
module.exports=app