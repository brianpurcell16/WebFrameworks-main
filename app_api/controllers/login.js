const mongoose = require('mongoose');
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

const login = function (req, res) { 
    res
    .status(200)
    .json({"status" : "success"});
}; 


module.exports = {
    //login
    Register
    };