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
        },
        order: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('ProductCategory', productCategorySchema)

//TODO: Add increment feature to order, we will also not want any duplicates