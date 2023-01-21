const express = require('express')
const productCategoryRouter = express.Router({mergeParams: true});
const productCategoryController = require('../controllers/productCategoryController')

productCategoryRouter.route('/')
    .put(productCategoryController.createProductCategory)

productCategoryRouter.route('/:categoryId')
    .patch(productCategoryController.updateProductCategory)
    .delete(productCategoryController.deleteProductCategory)


module.exports = productCategoryRouter