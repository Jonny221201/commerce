const asyncHandler = require('express-async-handler');
const { remove, find } = require('../models/productModel');
const Product = require('../models/productModel');


// @desc   Fetch all products
// @route   GET /products
// @access   Public

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
})

// @desc   Fetch single product
// @route   GET /products/:id
// @access   Public

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not Found')
    }
})

// @desc   Delete Product
// @route   DELETE /products/:id
// @access   Private/admin

const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        await product.remove()
        res.json({ message: 'Mahsulot O\'chirildi' })
    } else {
        res.status(404)
        throw new Error('Product not Found')
    }
})

// @desc   Create Product
// @route   POST /products
// @access   Private/admin

const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
      name: 'Sample name',
      price: 0,
      user: req.user._id,
      image: '/images/airpods.png',
      brand: 'Sample Brand',
      category: 'sample category',
      countInStock: 0,
      numReviews: 0,
      description: 'sample description'
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

// @desc   Update Product
// @route   PUT /products/:id
// @access   Private/admin

const updateProduct = asyncHandler(async (req, res) => {
    const { name, price, image, brand, category, countInStock, description } = req.body
  
    const product = await Product.findById(req.params.id)

    if(product) {
        product.name = name
        product.price = price
        product.image = image
        product.brand = brand
        product.category = category
        product.description = description
        product.countInStock = countInStock


        const updatedProduct = await product.save()
        res.json(updatedProduct)
    } else {
        res.status(404)
        throw new Error('Mahsulot topilmadi')
    }
  })
  

module.exports = {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct
}