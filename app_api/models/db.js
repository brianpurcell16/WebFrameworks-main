const mongoose = require('mongoose');
const dbURI =
"mongodb+srv://brian:brian123@webdatabase.00wzfxg.mongodb.net";
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