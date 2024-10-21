const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.register);
router.get('/login', ctrlMain.login);
//router.get('/', ctrlMain.reviews);

module.exports = router;
