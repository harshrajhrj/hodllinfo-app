const mongoose = require('mongoose');

const ApiSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    last: {
        type: Number,
    },
    buy: {
        type: Number,
    },
    sell: {
        type: Number,
    },
    volume: {
        type: Number
    },
    base_unit: {
        type: String
    }
}, {
    collection: 'api_data',
    timestamps: true
});

module.exports = mongoose.model('API', ApiSchema);