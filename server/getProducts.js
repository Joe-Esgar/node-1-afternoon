const products = require("./products.json");

const getProducts = (req, res) => {
  if (req.querry.price) {
    const items = products.filter(val => val.price >= req.querry.price);
    return res.status(200).send(items);
  }
  res.status(200).send(products);
};

module.exports = getProducts;
