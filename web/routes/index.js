var express = require('express');
var router = express.Router();
var randomstring = require("randomstring");

var mysql      = require('mysql');

 
var globalRandom = randomstring.generate();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	/* Needs to be extracted */
	var connection = mysql.createConnection({
	  host     : 'db',
	  user     : 'WEB-USER',
	  password : 'A_VERY_INSECURE_PASSWORD',
	  database : 'WEB-APP'
	});
	
	
	
	connection.connect();
	
	// Insert some data
	connection.query('INSERT INTO SAMPLE_TABLE(RAW_DATA) VALUES(\'{"sha1" : "' + globalRandom + '"}\');');

    // Count for this container
	connection.query('SELECT COUNT(*) as c FROM SAMPLE_TABLE WHERE JSON_CONTAINS(RAW_DATA, \'{"sha1" : "' + globalRandom + '"}\')', function (error, results, fields) {
		var count = results[0].c;
		console.log('Count : ', count);
		res.render('index', { random: globalRandom, count : count});
	});	
	
    // Retrieve log data to the console
	connection.query('SELECT RAW_DATA FROM SAMPLE_TABLE', function (error, results, fields) {
		console.log('Results : ', results);
	});
	
	connection.end();
  
});

module.exports = router;
