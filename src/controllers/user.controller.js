const UserService = require('../services/user.services.js');
const UserRepository = require('../repositories/userFake.repository.js');

class UserController {
    constructor() {
        this.service = new UserService(new UserRepository());
    }

    create = async (req, res, next) => {
        try {
            const data = req.body;
            const user = await this.service.create(data);

            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    };

    getById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await this.service.findOne(id);

            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    };

    getAll = async (req, res, next) => {
        try {
            const users = await this.service.findAll();

            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    };

    update = async (req, res, next) => {
        try {
            const { id } = req.params;
            const data = req.body;
            const user = await this.service.update(id, data);

            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    };

    delete = async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await this.service.delete(id);

            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    };
}

module.exports = UserController;
