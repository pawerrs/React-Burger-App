import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-bf02e.firebaseio.com/'
});

export default instance;