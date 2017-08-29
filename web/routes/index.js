var express = require('express');
var router = express.Router();
var randomstring = require("randomstring");
 
var globalRandom = randomstring.generate();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { random: globalRandom });
});

module.exports = router;
