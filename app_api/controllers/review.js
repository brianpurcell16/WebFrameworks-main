const mongoose = require('mongoose');
const { reviews } = require('../../app_server/controllers/review');
const Reviews = mongoose.model('Review');
const reviewsList = function (req, res){
    Reviews
        .find()
        console.log(reviews)
        .then((reviews, err) => {
            if(!reviews) {
                res
                    .status(404)
                    .json({
                        "message": "no reviews available"
                    });
                    return;
            }else if(err){
                res
                    .status(404)
                    .json(err);
                return;
            }
            res
            .status(200)
            console.log(reviews)
            .json(reviews);
        })
};

module.exports = {
    reviewsList
    };