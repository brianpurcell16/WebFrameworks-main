const mongoose = require('mongoose');
const Reviews = mongoose.model('Reviews');
const Account = mongoose.model('Users');

const reviewsList = function (req,res) {
    console.log("Fetching reviews...");

    Reviews
        .find()
        .exec()
        .then((reviews) => {
            if (reviews.length === 0) {
                res.status(404).json({ "message": "No reviews available" });
                return;
            }
            res.status(200).json(reviews);
        })
        .catch((err) => {
            console.error("Error fetching reviews:", err);
            res.status(500).json({ "error": "An error occurred while fetching reviews" });
        });
};

module.exports = {
    reviewsList
};