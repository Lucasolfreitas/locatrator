class UserRepository {
    constructor(model) {
        this.model = model;
    }

    async create(user) {
        return await this.model.create(user);
    }
}

module.exports = UserRepository;