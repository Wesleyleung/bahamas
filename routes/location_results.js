exports.fetchLocations = function(req, res) {
	var db = require('mongoskin').db('localhost/dormLocationDB');

	db.collection('locations').find().toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		res.send(result);
	});
};