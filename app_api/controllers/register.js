const mongoose = require('mongoose');
const Register = mongoose.model('Register');

const registerUser = function (req, res) { 
    res
    .status(200)
    .json({"status" : "success"});
};


module.exports = {
    registerUser
    };