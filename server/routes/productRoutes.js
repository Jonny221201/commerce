const express =require('express');
const asyncHandler = require('express-async-handler')
const router = express.Router();
const Product = require('../models/productModel');

// @desc   Fetch all products
// @route   GET /products
// @access   Public

router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
}))

// @desc   Fetch single product
// @route   GET /products/:id
// @access   Public

router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params._id)

    if(product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not Found')
    }
}))

module.exports = router