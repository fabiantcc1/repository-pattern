const express = require('express');
const usercontroller = require('../controllers/user.controller.js');

const router = express.Router();

router.post('/', usercontroller.create);
router.get('/:id', usercontroller.getById);
router.get('/', usercontroller.getAll);
router.put('/:id', usercontroller.update);
router.delete('/:id', usercontroller.delete);

module.exports = router;
