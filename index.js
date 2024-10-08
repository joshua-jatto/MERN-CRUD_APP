const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const Product = require("./modules/products.module");
const productsRoutes = require('./utilities/products.routes')
require('dotenv').config();
const uriKey = process.env.DATABASE_URI;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Create = post, Read = Get Put/patch = update Delete = delete
app.use("/api/products", productsRoutes);


//get home
app.get('/',(req,res)=>{
  res.send('Hello, This is a simple MERN-CRUD APP')
})

// mongodb connection stream
mongoose
  .connect(uriKey)
  .then(() => {
    console.log("connection to db successful");
    //console info
    app.listen(port, () => {
      console.log(`Hello there,server is running on port ${port}`);
    });
  })
  .catch((e) => {
    console.log("conection db failed", e.message);
  });
