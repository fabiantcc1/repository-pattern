const User = require('../models/user.model.js');

class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async findOne(id) {
        const user = await this.userRepository.getById(id);

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    }

    async findAll() {
        return await this.userRepository.getAll();
    }

    async create(userData) {
        const user = new User(userData);

        return await this.userRepository.create(user);
    }

    async update(id, userData) {
        userData.id = Number(id);
        const userUpdated = await this.userRepository.update(userData);

        if (!userUpdated) {
            throw new Error('User not found');
        }

        return userUpdated;
    }

    async delete(id) {
        const userDeleted = await this.userRepository.delete(id);

        if (!userDeleted) {
            throw new Error('User not found');
        }

        return userDeleted;
    }
}

module.exports = UserService;
