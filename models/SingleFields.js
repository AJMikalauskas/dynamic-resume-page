import mongoose from 'mongoose';
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

mongoose.models = {};

const SingleFields = mongoose.model('single-fields', singleFieldSchema);
export default SingleFields;