const products = require("./products.json");

const getProduct = (req, res) => {
  const item = products.find(val => val.id === parseInt(req.params.id));
  if (!item) {
    return res.status(500).send("Item not in list");
  }
  return res.status(200).send(item);
};

module.exports = getProduct;
