// var SendGrid = require('sendgrid').SendGrid;
// var bahamasfixit_email_address = "bahamasfixit@gmail.com";


// //Test function. Fields should be extracted from form.
// exports.email = function(req, res) {
// 	var user;
// 	var key;
// 	console.log(process.env.SENDGRID_USERNAME);
// 	console.log(process.env.SENDGRID_PASSWORD);
// 	if(!process.env.SENDGRID_USERNAME) {
// 		user = "";
// 	} else {
// 		user = process.env.SENDGRID_USERNAME;
// 	}
// 	if(!process.env.SENDGRID_PASSWORD) {
// 		key = "";
// 	} else {
// 		key = process.env.SENDGRID_PASSWORD;
// 	}

// 	var sendgrid = new SendGrid(user, key);
// 	sendgrid.send({
//   		to: 'wes.k.leung@gmail.com',
//   		from: bahamasfixit_email_address,
//   		subject: 'Hello World',
//   		text: 'Sending email with NodeJS through SendGrid!'
// 	}, function(success, message) {
// 		if(!success) {
// 			console.log(message);
// 		} 
// 		console.log(success);
// 	});

// 	res.render('success', { title: 'Success', title_link: '/success',
//                           left_title: 'Home', left_link: "/"})
// }

