const ProductCategory = require('../models/ProductCategory')
const User = require('../models/User')

// @desc Get all users
// @route GET /users
// @access Private
const getUsersProductCategories = async (req, res) => {
    
    // Get user Id from page you are on
    const id = req.params.id 

    const user = await User.findById(id).exec()
    console.log(req.params)

    /*
    // Get all users from MongoDB
    const categories = await ProductCategory.find().select('-password').lean()

    // If no users 
    if (!categories?.length) {
        return res.status(400).json({ message: 'No users found' })
    }
*/
    res.json(user)
    
}

module.exports = {
    getUsersProductCategories
}