import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export const createUser = async (user) => {
    try {
        const response = await api.post('/users', user);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        throw error;
    }
};