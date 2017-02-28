var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth:    {
		user: process.env.POSTMASTER,
		pass: process.env.POSTMASTER_KEY
	}
});


/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: process.env.TITLE_QLIMAX });
});
router.post('/contact', function (req, res, next) {
	var mailOptions = {
		sender: req.body.name,
		from:    req.body.name,
		to:      process.env.EMAIL_QLIMAX,
		subject: 'Web Contact',
		replyTo: req.body.email,
		priority: 'high',
		html: "<blockquote>"+req.body.message+"<hr><br><small>Best<br>"+req.body.name+"</small></blockquote>"
	};
	transporter.sendMail(mailOptions, function (error, info) {
		if ( error ) {
			res.status(500);
			res.send('Error processing your request');
			return console.log(error);
		}else {
			console.log('Message sent\nid: %s\nresponse: %s', info.messageId, info.response);
			res.send('Message sent!<br> id: '+info.messageId+'<br> response: '+ info.response);
		}
	});
});
module.exports = router;
