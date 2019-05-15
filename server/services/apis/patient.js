const express = require("express");
const router = express.Router();
const config = require("../../config/index");
const { JWT_SECRET } = config;
const jwt = require('express-jwt');
const PC = require('../controllers/patient.controller');
const patientsController = new PC();

let collection = 'patients';

// router.use(jwt({ secret: JWT_SECRET }));

router.get('/', (req, res) => {
    patientsController.getAllPatients(collection).then((patients) => {
        res.status(200).json({ message: "Okey", patients: patients || 'No patients' });
    });
});

module.exports = router;