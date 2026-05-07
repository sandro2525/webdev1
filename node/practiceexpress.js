const express = require("express");
const app = express();

app.use(express.json());

let products = [
  { id: 1, name: "Laptop", price: 2500 },
  { id: 2, name: "Phone", price: 1200 },
];

let users = [
  { username: "admin", password: "1234" },
  { username: "giorgi", password: "abcd" },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find(
    (p) => p.id === Number(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json(product);
});

app.post("/products", (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) =>
      u.username === username &&
      u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid username or password",
    });
  }

  res.json({
    message: "Login successful",
  });
});

app.listen(3000, () => {
  console.log("Server started");
});