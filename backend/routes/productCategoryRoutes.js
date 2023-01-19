const express = require('express')
const productCategoryRouter = express.Router({mergeParams: true});
const productCategoryController = require('../controllers/productCategoryController')

productCategoryRouter.route('/')
    .put(productCategoryController.createProductCategory)
    //.post(productCategoryController.createNewProductCategory)
    //.patch(productCategoryController.updateProductCategory)
    //.delete(productCategoryController.deleteProductCategory)

productCategoryRouter.route('/:pCatId')
    .patch(productCategoryController.updateProductCategory)
    .delete(productCategoryController.deleteProductCategory)


module.exports = productCategoryRouter