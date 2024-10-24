const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({ 
    username: String,
    email: String,
    password: String
});

const reviewSchema = new mongoose.Schema({ 
    movieName: String,
    review: String,
    reviewer: String,
    date: String,
    rating: Number
});


mongoose.model('Member',memberSchema);
mongoose.model('Review',reviewSchema);

