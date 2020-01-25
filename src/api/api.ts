import axios from 'axios';

const instanse = axios.create({
    baseURL: "http://localhost:3000"
});

const api = {
    counter: {
        getValue() {
            return instanse.get("/counter").then(res => res.data);
        }
    }
};

export default api;