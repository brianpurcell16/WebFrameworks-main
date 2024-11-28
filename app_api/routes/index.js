//const apiRoutes = require('../app_api/routes/index');

const express = require('express');
const router = express.Router();
const ctrlRegister = require('../controllers/register');
const ctrlLogin = require('../controllers/login');
const ctrlReview = require('../controllers/review');

//register
router
    .route('/register')
    //.post(ctrlRegister.registerUser);

//login
router
    .route('/login')
    //.post(ctrlLogin.login);

//review
router
    .route('/review')
    //.get(ctrlReview.reviews)

module.exports = router;
