const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlData = require('../controllers/review');

/* GET home page. */
router.get('/', ctrlMain.register);
router.get('/login', ctrlMain.login);
router.get('/review', ctrlData.reviews);

module.exports = router;
