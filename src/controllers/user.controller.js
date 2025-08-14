const UserService = require('../services/user.services.js');

const userService = new UserService();

exports.create = async (req, res, next) => {
    try {
        const data = req.body;
        const user = await userService.create(data);

        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

exports.getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await userService.findOne(id);

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

exports.getAll = async (req, res, next) => {
    try {
        const users = await userService.findAll();

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const user = await userService.update(id, data);

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

exports.delete = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await userService.delete(id);

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};
