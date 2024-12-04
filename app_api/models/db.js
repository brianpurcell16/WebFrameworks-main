const mongoose = require('mongoose');
require('./reviews');
const dbURI =
"mongodb+srv://bri2:bri2@webdatabase.jycky.mongodb.net/MovieReviews?retryWrites=true&w=majority&appName=WebDatabase";
try {
mongoose.connect(
dbURI,
{ useNewUrlParser: true, useUnifiedTopology: true }).then(
() => {console.log(" Mongoose is connected")},
err=> {console.log(err)}
);
}
catch (e) {
console.log("could not connect");
}

mongoose.set('debug', true);
