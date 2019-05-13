const DB = require('../../libs/mongoDb');

class LoginController {
    constructor() {}

    getAllUsers(collection) {
        const db = new DB();
        return new Promise((resolve) => {
            db.get(collection).then((users) => {
                console.log(users);
                resolve(users);
            });
        });
    }

    getUserByID() {

    }
}

module.exports = LoginController;