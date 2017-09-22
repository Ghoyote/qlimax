var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/createblog', function (req, res, next) {
	res.render('createblog', {
		title: process.env.TITLE_QLIMAX,
		noside: true
	});
});

module.exports = router;
