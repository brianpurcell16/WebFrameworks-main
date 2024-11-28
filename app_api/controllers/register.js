const mongoose = require('mongoose');
const { reviews } = require('./review');
const Register = mongoose.model('Member');
const request = require('request');
const apiOptions = {
server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
apiOptions.server = ' https://webframeworks-main.onrender.com;'
}

const requestOptions = {
    url : 'http://yourapi.com/api/path',
    method : 'GET',
    json : {},
    qs : {
    offset : 20
    }
    };

    request(requestOptions, (err, response, body) => {
        if (err) {
        console.log(err);
        } else if (response.statusCode === 200) {
        console.log(body);
        } else {
        console.log(response.statusCode);
        }
        });




const registerUser = function(req, res) {
    index.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    }).then ((err, location) => {
    if (err) {
    res
    .status(400)
    .json(err);
    } else {
    res
    .status(201)
    .json(location);
    }
    });
    };
 

module.exports = {
    registerUser,
    Register
    };