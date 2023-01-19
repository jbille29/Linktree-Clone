const express = require('express')
const productCategoryRouter = express.Router();
const productCategoryController = require('../controllers/productCategoryController')

productCategoryRouter.route('/')
    .get((productCategoryController.getUsersProductCategories))
    //.post(productCategoryController.createNewProductCategory)
    //.patch(productCategoryController.updateProductCategory)
    //.delete(productCategoryController.deleteProductCategory)

module.exports = productCategoryRouter