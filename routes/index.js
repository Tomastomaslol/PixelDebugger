var express = require('express');
var fs = require('fs');
var router = express.Router();


/* GET home page. */
router.get('/pixel.gif', function(req, res) {
	console.log("======================= HELLO!! Got request for pixel.gif! ======================= \n\n");
	console.log("\n host         : ", res.req.headers['host'], "\n");
	console.log("\n user-agent   : ", res.req.headers['user-agent'], "\n");
	console.log("\n cookie       : ", res.req.headers['cookie'], "\n");
	console.log("\n referer      : ", res.req.headers['referer'], "\n");


	//console.log("request is what : ", req);
//	console.log("res is what: ", res.req.headers);
	var gif = new Buffer([
	    0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 
	    0x80, 0x00, 0x00, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x2c, 
	    0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x02, 
	    0x02, 0x44, 0x01, 0x00, 0x3b]);
	 
	res.writeHead(200, {'Content-Type': 'image/gif' });
	res.end(gif, 'binary');
	console.log("\n\n==================================== BYE!! ======================================= \n\n");
});

module.exports = router;

/*

 headers:
  { host: 'localhost:3000'
    connection: 'keep-aliv
    pragma: 'no-cache',
    'cache-control': 'no-c
    accept: 'image/webp,
    'user-agent': 'Mozilla
 Version/7.0 Mobile/11A465
    referer: 'http://www.t
    'accept-encoding': 'gz
    'accept-language': 'en
    cookie: 'PermanentId=2
*/