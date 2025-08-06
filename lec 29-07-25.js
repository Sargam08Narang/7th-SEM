/*
express is minimal and flexible framework of node.js
express generator-it generates the complete base template for backend with a view engine

*/
const express=require("express");
const app=express();
const port=3000;
app.get("/",(req,res)=>{
    res.sendStatus(400)
})
