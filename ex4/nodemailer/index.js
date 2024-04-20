/*npm init*/
/* npm i express nodemailer */

var nodemailer = require('nodemailer');

var sender = nodemailer.createTransport({
	service: 'gmail',
	auth: {
	  user: 'jennieroopakumar@gmail.com',
	  pass: 'jennie@5524'
	}
  });
  
  var composer = {
	from: 'jennieroopa@gmail.com',
	to: 'jennieroopakumar_bai25@mepcoeng.ac.in',
	subject: 'Sending Email using Node.js',
	text: 'That was easy!'
  };
  
  sender.sendMail(composer, function(error, info){
	if (error) {
	  console.log(error);
	} else {
	  console.log('Email sent: ' + info.response);
	}
  });