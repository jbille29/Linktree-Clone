const express = require('express')
const userRouter = express.Router()
const productCategoryRouter = require('./productCategoryRoutes');
const userController = require('../controllers/userController')

userRouter.use('/:id/productCategories', productCategoryRouter);

userRouter.route('/')
    .get(userController.getAllUsers)
    .post(userController.createNewUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)

userRouter.route('/:id')
    .get(userController.getUser)

module.exports = userRouter