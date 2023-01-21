const express = require('express')
const productCategoryRouter = express.Router({mergeParams: true});
const productRouter = require('./productRoutes');
const productCategoryController = require('../controllers/productCategoryController')

productCategoryRouter.route('/')
    .put(productCategoryController.createProductCategory)

productCategoryRouter.route('/:categoryId')
    .patch(productCategoryController.updateProductCategory)
    .delete(productCategoryController.deleteProductCategory)

productCategoryRouter.use('/:categoryId/products', productRouter);


module.exports = productCategoryRouter