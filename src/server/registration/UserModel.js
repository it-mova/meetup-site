'use strict';
let mongoose = require('mongoose');
let loadClass = require('mongoose-class-wrapper');
let crypto = require('crypto');

let userSchema = new mongoose.Schema({
    email: {type: String, unique: true, required: true},
    username: {type: String, required: true},
    phone: {type: String, required: true},
    hash: {type: String, required: true},
    created: {type: Date, default: Date.now}
});
let Model = mongoose.model('User', userSchema);

class UserModel {

    static createUser(email, username, phone) {
        let hash = UserModel.createHash();
        let created = new Date();
        return new Model({email, username, phone, hash, created}).save();
    }

    static createHash() {
        let current_date = (new Date()).valueOf().toString();
        let random = Math.random().toString();
        return crypto.createHmac('sha1', "jsm").update(current_date + random).digest('hex');
    }

    static findByEmail(email) {
        return model.findOne({email}).exec();
    }

}
// Export mongoose model
module.exports = UserModel;