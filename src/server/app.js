'use strict'
let express = require('express');
let app = express();
process.env.NODE_CONFIG_DIR=`${__dirname}/config`;
let config = require('config');
let mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI);

var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

let UserService = require('./registration/UserService.js');
let EmailService = require('./email/EmailService.js');
let EventEmitter = require('events');

let emitter = new EventEmitter();
let userService = new UserService(emitter);
let emailService = new EmailService();

emitter.on('userCreated',
    (email) => {
        let emailData = config.get("email.registration");
        emailService.send([email], 'itmovaby@gmail.com', emailData.subject, emailData.body);
    }
);


app.post('/register', function(req, res){
    var {email, username, phone} = req.body;
    userService.register(email, username, phone).then(
            result => res.status(200).send(`success ${result}`),
            error => res.status(500).send(`error ${error}`)
    );
});

app.use('/', express.static(`${__dirname}/public`));
let port = process.env.PORT || '3000';
app.listen(port);
console.log(`started express on ${port}`);