const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// This will be education and name
const singleFieldSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

const singleFieldsModel = mongoose.model('single-fields', singleFieldSchema);
module.exports = singleFieldsModel;