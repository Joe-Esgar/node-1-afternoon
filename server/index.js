const express = require("express");
const getProducts = require("./getProducts");
const getProduct = require("./getProduct");
const app = express();

app.get("/api/products", getProducts);

app.get("/api/product/:id", getProduct);

const port = 4000;
app.listen(port, () => console.log(`listening on port: #${port}`));
