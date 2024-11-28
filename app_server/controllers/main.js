/* GET home page */
const register = function(req, res){
  res.render('register', { title: 'Register' });
};

const login = function(req, res){
  res.render('login', { title: 'Login' });
};

const reviewlist = function(req, res){
  const path = '../../app_api/controllers/review.js';
  const requestOptions = {
  url : apiOptions.server + path,
  method : 'GET',
  json : {},
  qs : {
  }
  };

  request(requestOptions, (err, response, body) => {
    _renderReviewPage(req, res);
    }
    );
    };
  

module.exports = {
  register,
  login,
  reviewlist
};