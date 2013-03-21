var mongo = require('mongodb');


exports.fetchLocations = function(req, res) {

    var mongoUri = process.env.MONGOLAB_URI || 
  		process.env.MONGOHQ_URL || 
  		'localhost/dormLocationDB'; 


  	mongo.Db.connect(mongoUri, function (err, db) {
		db.collection('locations').find().sort({name:1}).toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			res.send(result);
		});

};