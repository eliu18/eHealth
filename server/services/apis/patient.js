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
        res.status(200).json({ status: "ok", patients: patients || 'No patients' });
    });
});

router.post('/', (req, res) => {
    const patient = req.body;
    patient.name = patient.name.toUpperCase();
    patientsController.addPatient(collection, patient).then((status) => {
        res.status(200).json({ status: status });
    });
});

module.exports = router;