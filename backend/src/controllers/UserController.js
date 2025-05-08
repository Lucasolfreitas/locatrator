const UserService = require('../services/UserService');
const UserRepository = require('../repositories/UserRepository');
const User = require('../models/User');

const userRepository = new UserRepository(User);
const userService = new UserService(userRepository);

module.exports = {
    createUser: async (req, res) => {
        const { name, email, password, phone, region } = req.body;
        try {
            const user = await userService.createUser({ name, email, password, phone, region });
            res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};