import axios from 'axios';
//const BASE_URL = 'http://localhost:5000'; //--> https://dynamic-resume-backend.herokuapp.com/;
const BASE_URL = 'https://dynamic-resume-backend.herokuapp.com/';

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})