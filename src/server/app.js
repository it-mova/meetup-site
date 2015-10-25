'use strict'
let express = require('express');
let app = express();
process.env.NODE_CONFIG_DIR=`${__dirname}/config`;
let config = require('config');
let mongoose = require('mongoose');
let knownErrors = require('./core/known-errors');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/meetup');

var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(require('cookie-parser')());
app.use(require('cookie-session')({secret : process.env.SESSION_SECRET || "dev"}));

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

let captcha = require('captcha');
app.get('/captcha.jpg', captcha({color:'#FED136', background: 'rgb(20,30,20)' }));

app.use('/register', function captchaMiddleware(req, res, next) {
    if(req.body.captcha === req.session.captcha) {
        req.session.captcha = Math.random();
        next();
    } else {
        let error = knownErrors.INVALID_CAPTCHA;
        res.status(error.status).send({error : {code : error.code}});
    }
});

app.post('/register', function(req, res){
    var {email, username, phone} = req.body;
    userService.register(email, username, phone).then(
            result => res.status(200).send({data : result}),
            error => res.status(error.status).send({error : {code : error.code}})
    );
});

app.use('/', express.static(`${__dirname}/public`));
let port = process.env.PORT || '3000';
app.listen(port);
console.log(`started express on ${port}`);