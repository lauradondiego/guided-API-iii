const express = require("express");

const productsRouter = require("../products/products-router");

const server = express();

//global middleware goes here
server.use(express.json());

server.use("/products", productsRouter);
// anything that begins with /products, use this products router
// now lets go create the prducts router with a new folder called products
server.use("/suppliers", suppliersRouter);

//route handlers here
server.get("/", (req, res) => {
  res.status(200).json({ api: "up and running" });
});

server.get("/clients", (req, res) => {});
// we changed the way we use this from get, on line 8 and 11
module.exports = server;
//this exports everything instead of default export in JS
