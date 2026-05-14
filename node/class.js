import express from "express";
const app = express();

app.use(express.json());

let products = [];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  res.json(product);
});

app.post("/products", (req, res) => {
  const newProduct = {
    id: Date.now(),
    ...req.body,
  };
  products.push(newProduct);
  res.json(newProduct);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
