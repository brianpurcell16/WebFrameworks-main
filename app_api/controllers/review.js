const mongoose = require('mongoose');
const Reviews = mongoose.model('Review');
const reviewsList = function (req, res){
    console.log("howdy")
    Reviews
        .find()
        .then((reviews, err) => {
            if(reviews.length == 0) {
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
            //not finding reviews
            res
            .status(200)
            .json(reviews);
        })
};

module.exports = {
    reviewsList
    };