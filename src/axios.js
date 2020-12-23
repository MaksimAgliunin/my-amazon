import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/my-f4f2f/us-central1/api' //The Api (cloud function) URL
});

export default instance;