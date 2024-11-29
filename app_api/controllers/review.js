const mongoose = require('mongoose');
const Reviews = mongoose.model('Review');
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

const reviews = function (req, res) { 
    res
    .status(200)
    .json({"status" : "success"});
};

const _renderReviewpage = function(req, res, responseBody){
    res.render('review', {  title: 'Review',
        review: responseBody
    })
    };
    const reviewlist = function(req, res){
    _renderReviewpage(req, res, body);
    }; 


module.exports = {
    Reviews,
    reviews,
    reviewlist
    };