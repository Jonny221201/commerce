const express = require('express');
const products = require('./data/data')

const app = express();

app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    const product = products.find((p) => p.id === req.params.id)
    res.json(product)
})

app.listen(5000, console.log("Hello"));