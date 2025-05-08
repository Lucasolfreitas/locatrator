const bcrypt = require('bcrypt');

class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async createUser(userData) {
        // Validações
        if (!userData.name || !userData.email || !userData.password || !userData.phone || !userData.region) {
            throw new Error('Todos os campos são obrigatórios');
        }

        // Criptografando a senha
        userData.password = await bcrypt.hash(userData.password, 10);

        return await this.userRepository.create(userData);
    }
}

module.exports = UserService;