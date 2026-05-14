import express from "express";

const app = express();
app.use(express.json());

const products = [
  {
    id: 1,
    category: "Electronics",
    name: "iPhone 15",
    price: 3500,
  },
  {
    id: 2,
    category: "Electronics",
    name: "Samsung TV",
    price: 2200,
  },
  {
    id: 3,
    category: "Clothes",
    name: "Nike Hoodie",
    price: 180,
  },
  {
    id: 4,
    category: "Books",
    name: "Clean Code",
    price: 90,
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:3000`);
});