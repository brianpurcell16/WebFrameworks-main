const mongoose = require('mongoose');
const dbURI =
"mongodb+srv://brian:brian123@webdatabase.jycky.mongodb.net/?retryWrites=true&w=majority&appName=WebDatabase";
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
require('./reviews'); 