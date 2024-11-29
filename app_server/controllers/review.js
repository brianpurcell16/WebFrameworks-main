const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://webframeworks-main.onrender.com';
}

const _renderHomepage = function(req, res, responseBody){
    res.render('review', { 
        title: 'review',
        review: responseBody
    });
}

/* GET home page */
const review = function(req, res){
    const path = '/api/reviews';
    const requestOptions = {
        url : apiOptions.server + path,
        method: 'GET',
        json: {},
        qs : {}
    };
    request(requestOptions, (err, response, body) => {
        _renderHomepage(req, res, body);
    })
};
module.exports = {
    review
};