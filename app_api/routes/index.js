
const express = require('express');
const router = express.Router();
const ctrlAcc = require('../controllers/login');
const ctrlReview = require('../controllers/review');

//register
router
    .route('/main/register')
    .post(ctrlAcc.registerUser);

//login
router
    .route('/main/login')
    .post(ctrlAcc.login);

//review
router
    .route('/review')
    .get(ctrlReview.reviews)

module.exports = router;
