const express = require("express");
const app = express();
const products = [
  { id: 1, name: "mouse", price: 30 },
  { id: 2, name: "keyboard", price: 50 },
  { id: 3, name: "monitor", price: 200 },
  { id: 4, name: "headphones", price: 80 }
];
app.get("/products", (req, res) => {
  res.send(products);
});
app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).send({ message: "Product not found" });
  }

  res.json(product);
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});