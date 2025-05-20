const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve HTML, CSS, JS

// Order API
app.post('/order', (req, res) => {
  const newOrder = req.body;

  // Read existing orders
  let orders = [];
  if (fs.existsSync('orders.json')) {
    const data = fs.readFileSync('orders.json');
    orders = JSON.parse(data);
  }

  // Add new order
  orders.push(newOrder);

  // Save back to file
  fs.writeFileSync('orders.json', JSON.stringify(orders, null, 2));

  res.json({ success: true, message: "Order placed successfully!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
