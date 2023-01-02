import mongoose from 'mongoose';
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
});

mongoose.models = {};

const OtherProjects = mongoose.model('other-projects', otherProjectsSchema);
export default OtherProjects;