import mongoose from 'mongoose';
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

mongoose.models = {};

const Skills = mongoose.model('skills', skillsSchema);
export default Skills;