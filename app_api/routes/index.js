
const express = require('express');
const router = express.Router();
const ctrlAcc = require('../controllers/login');
const ctrlReview = require('../controllers/review');
var passport = require('passport');

// //register
router
    .route('/main/register')
    .post(ctrlAcc.accountsCreate);
   /*  .post(ctrlAcc.accountsCreate, function(req, res) {
        Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
            if (err) {
                return res.render('register', { account : account });
            }
    
            passport.authenticate('local')(req, res, function () {
                res.redirect('/');
            });
        });
    }); */



// //login
router
    .route('/main/login')
    .post(ctrlAcc.accountsLogin);
    /* route.get('/main/login', function(req, res) {
        res.render('login', { user : req.user });
    });
    route.post(ctrlAcc.accountsLogin, passport.authenticate('local'), function(req, res) {
        res.redirect('/');
    }); */

    

//review
router
    .route('/review')
    .get(ctrlReview.reviewsList);


/* router.get('/ping', function(req, res){
    res.status(200).send("pong!");
})
    */
module.exports = router;
