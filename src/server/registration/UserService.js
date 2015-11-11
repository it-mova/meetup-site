'use strict';
let UserModel = require('./UserModel.js');

class UserService {

    constructor(emitter) {
        this.emitter = emitter;
    }

    register(email, username, phone) {
        return UserModel.createUser(email, username, phone).then(
                data => this.emitter.emit('userCreated', email, username, phone)
        );
    }

    getUsers() {
        return UserModel.findAll()
    }
}

module.exports = UserService;