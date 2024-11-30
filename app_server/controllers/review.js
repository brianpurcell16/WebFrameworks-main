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
        reviews: responseBody
    });
}

/* GET home page */
const reviews = function(req, res){
    const path = '/api/review';
    const requestOptions = {
        url : apiOptions.server + path,
        method: 'GET',
        json: {},
        qs : {}
    };
    request(requestOptions, (err, response, body) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        _renderHomepage(req, res, body);
    });
};


module.exports = {
    reviews
};