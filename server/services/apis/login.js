const express = require("express");
const router = express.Router();
const config = require("../../config/index");
const { JWT_SECRET } = config;
const jwt = require('express-jwt');
const LC = require('../controllers/login.controller');
const loginController = new LC();

let collection = 'users';

// router.use(jwt({ secret: JWT_SECRET }));

router.get('/', (req, res) => {
    loginController.getAllUsers(collection).then((users) => {
        res.status(200).json({ message: "Okey", users: users || 'No users' });
    });
});

module.exports = router;