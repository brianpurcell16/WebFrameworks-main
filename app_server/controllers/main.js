/* GET login page */
const login = function(req, res){
  res.render('login', { 
      title: 'Log In',
      isReg: false
  });
};


/* GET register page */
const register = function(req, res){
  res.render('register', { 
      title: 'Register',
      isReg: true
  });
};
module.exports = {
  login,
  register
};