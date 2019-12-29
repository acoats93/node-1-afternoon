const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');
const app = express();


app.use(express.json());

app.get('/api/products', getProducts)
app.get('/api/products/:id', getProduct)

app.listen(3001, () => console.log('Running on 3001'));