const asyncHandler = require('express-async-handler')
const ProductCategory = require('../models/ProductCategory')
const User = require('../models/User')

// @desc Create a product category
// @route PUT /users/:id/productcategory
// @access Private
const createProductCategory = asyncHandler(async (req, res) => {
    const { name } = req.body
    const userId = req.params.id

    // confirm data
    if(!name) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // check for duplicate title
    //TODO: CHECK FOR DUPLICATE NAME UNDER USER

    // create the new category
    const newCategory = new ProductCategory({
        name: name,
        order:1
    })
    //TODO: SET UP MODEL SO IT AUTOMATICALLY INCREMENTS ORDER

    // save the new category
    const savedCategory = await newCategory.save();

    // find the user
    const user = await User.findById(userId);

    // check if user exists
    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    // add the new category to the user's categories array
    user.productCategories.push(savedCategory._id);

    // save the user document
    await user.save();

    /*
    User.findOne({username: 'Kyle' }).populate('productCategories').exec((err, user) => {
        if (err) return res.send(err);
        console.log('pcs', user.productCategories);
      });
    */

    res.status(201).json({ message: 'New product category created' })
})

// @desc Update a product category
// @route PATCH /users/:id/productcategory/:id
// @access Private
const updateProductCategory = asyncHandler(async (req, res) => {
    const { categoryId } = req.params
    const { name } = req.body

    // find the category by its id
    const category = await ProductCategory.findById(categoryId);

    // update the name field
    category.name = name;

    // save the updated category
    await category.save();

    // update user
    await User.updateMany({productCategories: categoryId}, { $set: { "categories.$.name": name } });
    //TODO: VALIDATE ON THE FRONTEND THAT THIS UPDATES THE USER IN REAL TIME -> I MAY HAVE TO ALSO SAVE THE USER
    
    res.json('Product category updated')
})

// @desc Delete a product category
// @route DELETE /users/:id/productcategory/:id
// @access Private
const deleteProductCategory = asyncHandler(async (req, res) => {
    const { categoryId } = req.params

    // find the category by its id and delete it
    await ProductCategory.findByIdAndDelete(categoryId);

    // remove category from user
    await User.updateMany({productCategories: categoryId}, { $pull: { productCategories: categoryId } });

    res.json('Product category deleted')
})

module.exports = {
    createProductCategory,
    updateProductCategory,
    deleteProductCategory
}