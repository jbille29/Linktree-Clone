const mongoose = require('mongoose')

const productCategorySchema = new mongoose.Schema(
    {
        products: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }],
        name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('ProductCategory', productCategorySchema)