
const express = require('express');
const router = express.Router();
const ctrlAcc = require('../controllers/login');
const ctrlReview = require('../controllers/review');

// //register
router
    .route('/main/register')
    .post(ctrlAcc.accountsCreate);

// //login
router
    .route('/main/login')
    .post(ctrlAcc.accountsLogin);

//review
router
    .route('/review')
    .get(ctrlReview.reviewsList);

module.exports = router;
