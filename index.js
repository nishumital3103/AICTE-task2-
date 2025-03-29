 // "mongoose": "^8.13.0"
// import express from 'express';
// import  Mongoose from 'mongoose';
const express = require('express'); 
const app = express();  
const mongoose = require("mongoose");
const port = 3000;

app.use(express.json());

const Product=require("./Models/Product");
const Signup=require("./Models/Signup");

app.get('/sayHello', (req, res) => {
  res.send('Hello Guyssss.')
});

app.post('/addProductData', async (req, res) => {
  try{
    const product=await Product.create(req.body);
    res.json(product);
    console.log("Data Inserted");
  }
  catch(error){
   
    res.send("Data not Inserted");
  }
});

app.get('/getProductData', async (req, res) => {
  try{
    const product=await Product.find({});
    res.json(product);
    console.log("Data fetched");
  }
  catch(error){
   
    res.send("Data not fetched");
  }
});

app.post("/signup", async(req,res) => {
  try{
    const signup = await Signup.create(req.body);
    res.json(signup);
    console.log("Signup successfully");
  }catch(error){
    res.send("Signup not done yet ! ");
  }
});

app.get('/signin', async (req, res) => {
  try{
    const Signin=await Signup.find({});
    res.json(Signin);
    console.log("Student Data fetched");
  }
  catch(error){
    res.send("Student Data not fetched");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

mongoose.connect("mongodb+srv://Nishu_Mittal:Ramesh123@cluster0.zhmt1eu.mongodb.net/")
.then(() =>{
    console.log("Connected to Mongodb Successfully");
}).catch((err) => {
    console.log("Error connecting to MongoDB", err)
});