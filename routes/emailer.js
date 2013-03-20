var SendGrid = require('sendgrid').SendGrid;
var Email = require('sendgrid').Email;
var bahamasfixit_email_address = "stanfordfixit@gmail.com";


//Test function. Fields should be extracted from form.
exports.email = function(req, res) {
	var user;
	var key;
	
	if(!process.env.SENDGRID_USERNAME) {
		user = "app12301695@heroku.com";
	} else {
		user = process.env.SENDGRID_USERNAME;
	}
	if(!process.env.SENDGRID_PASSWORD) {
		key = "ztacpmnd";
	} else {
		key = process.env.SENDGRID_PASSWORD;
	}

	var sendgrid = new SendGrid(user, key);

	var email = new Email({
		to: 'stanfordfixit@gmail.com',
  		from: bahamasfixit_email_address,
  		subject: 'Fixit Request for ' + req.body.building + " " + req.body.additional,
  		text: (req.body.description) ? (req.body.description) : ""
	});
	email.addFile({
  		filename: req.body.building + req.body.additional + '.png',
  		path: req.files.uploaded_input.path
	});
	sendgrid.send(email, function(success, message) {
		if(!success) {
			console.log(message);
		} 
		console.log(success);
	});
	res.render('success', { title: 'Success', title_link: '/success',
                          left_title: 'Home', left_link: "/"})
}