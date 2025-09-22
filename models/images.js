const mongoose = require('mongoose');

let imageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

let Image = module.exports = mongoose.model('Image', imageSchema);
