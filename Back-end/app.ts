
const express=require('express')
const app=express();

if(process.env.NODE_ENV!== "PRODUCTION"){
    require("dotenv").config({
        path:"/Back-end/config/.env"
    })
}

module.exports=app