var mongo = require('mongodb');


exports.fetchLocations = function(req, res) {
    var mongoUri = process.env.MONGOLAB_URI ||
  		process.env.MONGOHQ_URL ||
  		'localhost/dormLocationDB' ||
      'mongodb://heroku_app12301695:q09lbo3ilv7gq5doqlo12ufgsh@ds037907.mongolab.com:37907/heroku_app12301695';

  	console.log(process.env.MONGOLAB_URI);

  	console.log("got mongoURI" + mongoUri);
  	if(mongoUri) {
	  	mongo.Db.connect(mongoUri, function (err, db) {
			db.collection('locations').find().sort({name:1}).toArray(function(err, result) {
				if (err) throw err;
				console.log(result);
				res.send(result);
			});
		});
	}
};
