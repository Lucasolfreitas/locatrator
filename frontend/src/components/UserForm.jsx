import React, { useState } from 'react';
import { createUser } from '../services/api';

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUser(formData);
            alert('Usuário cadastrado com sucesso!');
        } catch (error) {
            alert('Erro ao cadastrar usuário');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nome" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Senha" onChange={handleChange} />
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default UserForm;