/* GET home page */
const register = function(req, res){
  res.render('register', { title: 'Register' });
};

const login = function(req, res){
  res.render('login', { title: 'Login' });
};

//const review = function(req, res){
  //res.render('index', { title: 'Reviews' });
//};

module.exports = {
  register,
  login,
  //review
};