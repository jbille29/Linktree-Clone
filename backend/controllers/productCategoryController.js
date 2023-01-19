const asyncHandler = require('express-async-handler')
const ProductCategory = require('../models/ProductCategory')
const User = require('../models/User')

// @desc Create a product category
// @route PUT /users/:id/productcategory
// @access Private
const createProductCategory = asyncHandler(async (req, res) => {
    res.send('PC created!')
})

// @desc Update a product category
// @route PATCH /users/:id/productcategory/:id
// @access Private
const updateProductCategory = asyncHandler(async (req, res) => {
    
    res.send(req.params)
})

// @desc Delete a product category
// @route DELETE /users/:id/productcategory/:id
// @access Private
const deleteProductCategory = asyncHandler(async (req, res) => {
    res.send('PC deleted!')
})

module.exports = {
    createProductCategory,
    updateProductCategory,
    deleteProductCategory
}