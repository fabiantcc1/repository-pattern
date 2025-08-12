class IUserRepository {
    /**
     * @returns {Promise<Array>} - Returns a promise that resolves to an array of users.
     */
    async getById(id) {
        throw new Error("Method 'getById' must be implemented.");
    }

    /**
     * @returns {Promise<Array>} - Returns a promise that resolves to an array of users.
     */
    async getAll() {
        throw new Error("Method 'getAll' must be implemented.");
    }

    /**
     * @param {User} user - The user to be created.
     */
    async create(user) {
        throw new Error("Method 'create' must be implemented.");
    }

    /**
     * @param {User} user - The user to be updated.
     */
    async update(user) {
        throw new Error("Method 'update' must be implemented.");
    }

    /**
     * @param {number} id - The ID of the user to be deleted.
     */
    async delete(id) {
        throw new Error("Method 'delete' must be implemented.");
    }
}

module.exports = IUserRepository;
