const express = require('express')
const userRouter = express.Router()
const productCategoryRouter = require('./productCategoryRoutes');
const userController = require('../controllers/userController')

userRouter.route('/')
    .get(userController.getAllUsers)
    .post(userController.createNewUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)

userRouter.route('/:id')
    .get(userController.getUserPageInfo)

userRouter.use('/:id/productCategories', productCategoryRouter);

module.exports = userRouter