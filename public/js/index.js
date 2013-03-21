function picClickFunction() {
	$('#upload_input').click();
}

function showPreview(input) {
	if (input.files && input.files[0]) {
	    var reader = new FileReader();
		reader.onload = function(e) {
			$('#pic').attr('src', e.target.result);

			//document.getElementById('hiddenPreview').style.display="block";
			//document.getElementById('hidden').style.display="none";
		}
		reader.readAsDataURL(input.files[0]);

		function success(position) {
			var lat = position.coords.latitude;
			var lng = position.coords.longitude;

			var mongo = require('mongodb');

			var mongoUri = 'mongodb://localhost/dormLocationDB';
				//process.env.MONGOLAB_URI || 
				//process.env.MONGOHQ_URL || 
				//'mongodb://localhost/dormLocationDB'; 

			mongo.Db.connect(mongoUri, function (err, db) {
				console.log('herrow');
				var numLocations = db.locations.count();
				var locations = db.locations.find();
				var minDistance = -1;
				var index = -1;

				for (var i = 0; i < numLocations; i++) {
					var locLat = locations[i].lat;
					var locLng = locations[i].lng;
					var distance = pow((testLocation.lat - lat),2) + pow((testLocation.lng - lng),2);
					if (minDistance > 0 && distance < minDistance) {
						minDistance = distance;
						index = i;
					}
				}
				$('#building').attr('value', locations[index].name);
				/*db.collection('locations', function(er, collection) {
					collection.insert({'mykey': 'myvalue'}, {safe: true}, function(er,rs) {
					});
				});*/
			});



			//$('#building').attr('value', lat);
			//document.getElementById('photo_lng').value = lng;
		}

		function error(msg) {
			var errMsg = typeof msg == 'string' ? msg : "Geolocation failed";
			$('#msg').html(errMsg);
		}

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			error('Geolocation not supported');
		}
	}
}