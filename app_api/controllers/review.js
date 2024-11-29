const mongoose = require('mongoose');
const Reviews = mongoose.model('Review');
const reviewsList = function (req, res){
    Reviews
        .find()
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
            .json(reviews);
        })
};

module.exports = {
    reviewsList
    };