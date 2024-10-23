const apiRoutes = require('./app_api/routes/index');

const express = require('express');
const router = express.Router();
const ctrlRegister = require('../controllers/register');
const ctrlLogin = require('../controllers/login');
const ctrlReview = require('../controllers/review');

//register
router
.route('/register')

//login
router
.route('/login')

//review
router
.route('/review')

module.exports = router;
