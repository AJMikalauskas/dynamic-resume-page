import mongoose from 'mongoose';
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

mongoose.models = {};

const Projects = mongoose.model('projects', projectSchema);
export default Projects;