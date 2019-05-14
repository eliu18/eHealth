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
}

module.exports = PatientController;