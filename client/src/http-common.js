import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        "Content-type": "application/json"
    }
});