const express = require('express');
const app = express();


app.use(express.json());


app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});


app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'My Custom Server');
  next();
});


app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
  res.send('This is the About Page!');
});

app.post('/data', (req, res) => {
  const body = req.body;
  res.json({ message: 'Data received!', data: body });
});

app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});