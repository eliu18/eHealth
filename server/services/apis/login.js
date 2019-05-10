const express = require("express");
const router = express.Router();

const LC = require('../controllers/login.controller');
const loginController = new LC();

let collection = 'users';

router.get('/', (req, res) => {
    loginController.getAllUsers(collection).then((users) => {
        res.status(200).json({ message: "Ok", users: users || 'Option2' });
    });
});

module.exports = router;