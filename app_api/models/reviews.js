const mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

const memberSchema = new mongoose.Schema({ 
    username: String,
    password: String
});

const reviewSchema = new mongoose.Schema({ 
    movieName: String,
    review: String,
    reviewer: String,
    date: String,
    rating: Number
});

const Users = mongoose.model('Users',memberSchema, 'Users');
const Reviews = mongoose.model('Reviews',reviewSchema,'reviews' );

module.export = {
    Users,
    Reviews
};


