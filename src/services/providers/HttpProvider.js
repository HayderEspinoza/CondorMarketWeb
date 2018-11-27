import axios from 'axios';
import { config } from './../../config/constants';

const HttpProvider = axios.create({
    baseURL: `${config.api}`,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
    }
})

HttpProvider.interceptors.request.use(async (config) => {
    // Do something before request is sent
    let session = window.localStorage.getItem('session');
    session = session ? JSON.parse(session) : ''
    config.headers['Authorization'] = `Bearer ${session.token}`;
    return config;
}, function (error) {
    // Do something with request error
    console.log('error request')
    return Promise.reject(error);
});

export default HttpProvider;