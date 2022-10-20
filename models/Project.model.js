const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    },
    explanationBulletPoints: {
        type: String,
        required: true
    },
    techStack: {
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
    }
})

const projectModel = mongoose.model('projects', projectSchema);
module.exports = projectModel;