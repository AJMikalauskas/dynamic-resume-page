const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// This will be education and name
const skillsSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    skillSetName: {
        type: String, 
        required: true
    },
    skills: {
        // Should I use String[5] or Array?
        type: Array,
        required: true
    }
})

const skillsModel = mongoose.model('skills', skillsSchema);
module.exports = skillsModel;