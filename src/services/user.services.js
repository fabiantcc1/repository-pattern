const UserRepository = require('../repositories/userFake.repository.js');
const User = require('../models/user.model.js');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async findOne(id) {
        const user = await this.userRepository.getById(id);

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    }

    async findAll() {
        return this.userRepository.getAll();
    }

    async create(userData) {
        const user = new User(userData);

        return this.userRepository.add(user);
    }

    async update(id, userData) {
        userData.id = id;
        const userUpdated = this.userRepository.update(userData);

        if (!userUpdated) {
            throw new Error('User not found');
        }

        return userUpdated;
    }

    async delete(id) {
        const userDeleted = this.userRepository.delete(id);

        if (!userDeleted) {
            throw new Error('User not found');
        }

        return userDeleted;
    }
}

module.exports = UserService;
