import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://randomuser.me/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});


axiosInstance.interceptors.request.use(
    (config) => {
        console.log('Requisição enviada:', config);
        return config;
    },
    (error) => {
        console.error('Erro na requisição:', error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        console.log('Resposta recebida:', response);
        return response;
    },
    (error) => {
        console.error('Erro na resposta:', error);
        return Promise.reject(error);
    }
);
