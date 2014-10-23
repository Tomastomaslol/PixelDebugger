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

     var gif = new Buffer([
	    0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 
	    0x80, 0x00, 0x00, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x2c, 
	    0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x02, 
	    0x02, 0x44, 0x01, 0x00, 0x3b]);
	 
	res.writeHead(200, {'Content-Type': 'image/gif' });
	res.end(gif, 'binary');
	console.log("\n\n==================================== BYE!! ======================================= \n\n");
});

router.get('/pixel.js', function(req, res) {
	console.log("======================= HELLO!! Got request for pixel.js! ======================= \n\n");
	console.log("\n host         : ", res.req.headers['host'], "\n");
	console.log("\n user-agent   : ", res.req.headers['user-agent'], "\n");
	console.log("\n cookie       : ", res.req.headers['cookie'], "\n");
	console.log("\n referer      : ", res.req.headers['referer'], "\n");

     var js = "(function(){if(typeof console == 'object'){console.log('Hello im a test pixel hosted at http://tm-pixel-debug.herokuapp.com/pixel.js for debuging stuff');}})();";
	 
	res.writeHead(200, {'Content-Type': 'application/x-javascript' });
	res.end(js);
	console.log("\n\n==================================== BYE!! ======================================= \n\n");
});
module.exports = router;




/*
Content-Type:application/x-javascript
*/