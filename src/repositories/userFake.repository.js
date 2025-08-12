const IUserRepository = require('./IUser.repository.js');

class UserFakeRepository extends IUserRepository {
    constructor() {
        super();
        this.users = [];
        this.nextId = 1;
    }

    async getById(id) {
        return this.users.find((user) => user.id === Number(id)) || null;
    }

    async getAll() {
        return this.users;
    }

    async add(user) {
        user.id = this.nextId++;
        this.users.push(user);

        return user;
    }

    async update(updatedUser) {
        const index = this.users.findIndex(
            (user) => user.id === updatedUser.id,
        );
        if (index === -1) {
            return null;
        }
        this.users[index] = updatedUser;

        return updatedUser;
    }

    async delete(id) {
        const index = this.users.findIndex((user) => user.id === Number(id));
        if (index === -1) {
            return false;
        }
        this.users.splice(index, 1);

        return this.users[index];
    }
}

module.exports = UserFakeRepository;
