const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otherProjectsSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const otherProjectsModel = mongoose.model('other-projects', otherProjectsSchema);
module.exports = otherProjectsModel;