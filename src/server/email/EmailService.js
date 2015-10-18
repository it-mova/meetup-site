'use strict';

let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport("SMTP", {
    service: 'Gmail',
    auth: {
        user: 'itmovaby@gmail.com',
        pass: process.env.IT_MOVA_PASSWORD
    }
});

class EmailService {

    send(to, from, subject, text) {
        let mailOptions = {to, from, subject, text};
        return new Promise(function (resolve, reject) {
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log(info);
                    resolve(info);
                }
            });
        });
    }

}

module.exports = EmailService;