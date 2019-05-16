const DB = require('../../libs/mongoDb');

class PatientController {
    constructor() {}

    getAllPatients(collection) {
        const db = new DB();
        return new Promise((resolve) => {
            db.get(collection).then((patients) => {
                console.log(patients);
                resolve(patients);
            });
        });
    }

    addPatient(collection, patient) {
        const db = new DB();
        return new Promise((resolve) => {
            db.insert(collection, patient).then((status) => {
                resolve(status);
            });
        });
    }
}

module.exports = PatientController;