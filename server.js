const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true });

const Product = mongoose.model('Product', {
  name: String,
  description: String,
  price: Number,
  image: String
});

app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.listen(5000, () => console.log('Server started on port 5000'));
