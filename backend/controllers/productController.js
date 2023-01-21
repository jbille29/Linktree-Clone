const asyncHandler = require('express-async-handler')
const Product = require('../models/Product')
const ProductCategory = require('../models/ProductCategory')

// @desc Create a product 
// @route PUT /users/:id/productCategories/:categoryId/products
// @access Private
const createProduct = asyncHandler(async (req, res) => {
    console.log(req.params)
    res.json('Product  updated')
})

// @desc Update a product 
// @route PATCH /users/:id/productCategories/:categoryId/products/:productId
// @access Private
const updateProduct = asyncHandler(async (req, res) => {
    console.log(req.params)
    res.json('Product  updated')
})

// @desc Delete a product 
// @route DELETE /users/:id/productCategories/:categoryId/products/:productId
// @access Private
const deleteProduct = asyncHandler(async (req, res) => {

    res.json('Product  deleted')
})

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct
}