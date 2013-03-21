exports.fetchLocations = function(req, res) {
	var db = require('mongoskin').db('localhost/dormLocationDB');

	db.collection('locations').find().sort({name:1}).toArray(function(err, result) {
		if (err) throw err;
		res.send(result);
	});
};