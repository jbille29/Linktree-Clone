const express = require('express')
const productRouter = express.Router({mergeParams: true});
const productController = require('../controllers/productController')

productRouter.route('/')
    .put(productController.createProduct)

productRouter.route('/:productId')
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct)


module.exports = productRouter