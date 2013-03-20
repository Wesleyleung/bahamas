var SendGrid = require('sendgrid').SendGrid;
var bahamasfixit_email_address = "bahamasfixit@gmail.com";
var qs = require('querystring');

//Test function. Fields should be extracted from form.
exports.email = function(req, res) {
	var user;
	var key;
	console.log(process.env.SENDGRID_USERNAME);
	console.log(process.env.SENDGRID_PASSWORD);
	console.log(req.method);
	console.log(req.body);
	console.log(req.body.user);
	console.log(req.body.building);
	console.log(req.body.description);

	if (req.method == 'POST') {
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {

            var POST = qs.parse(body);
            console.log("this is post");
            console.log(POST);

        });
    }


	if(!process.env.SENDGRID_USERNAME) {
		user = "app12301695@heroku.com";
	} else {
		user = process.env.SENDGRID_USERNAME;
	}
	if(!process.env.SENDGRID_PASSWORD) {
		key = "";
	} else {
		key = process.env.SENDGRID_PASSWORD;
	}

	var sendgrid = new SendGrid(user, key);
	sendgrid.send({
  		to: 'stanfordfixit@gmail.com',
  		from: bahamasfixit_email_address,
  		subject: 'Hello World',
  		text: 'Sending email with NodeJS through SendGrid!'
	}, function(success, message) {
		if(!success) {
			console.log(message);
		} 
		console.log(success);
	});

	res.render('success', { title: 'Success', title_link: '/success',
                          left_title: 'Home', left_link: "/"})
}



