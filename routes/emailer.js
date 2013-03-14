


var SendGrid = require('sendgrid').SendGrid;
var sendgrid = new SendGrid(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
var bahamasfixit_email_address = "bahamasfixit@gmail.com";


//Test function. Fields should be extracted from form.
exports.email = function(req, res) {
	
	sendgrid.send({
  		to: 'wes.k.leung@gmail.com',
  		from: bahamasfixit_email_address,
  		subject: 'Hello World',
  		text: 'Sending email with NodeJS through SendGrid!'
	});

	res.render('success', { title: 'Success', title_link: '/success',
                          left_title: 'Home', left_link: "/"})
}

