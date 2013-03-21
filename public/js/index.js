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

		function loadLocations(lat, lng) {
			$.ajax({
				url: '/location_results',
				success: function(locations) {
					var minDistance = -1;
					var index = -1;

					for (var i = 0; i < locations.length; i++) {
						var locLat = locations[i].lat;
						var locLng = locations[i].lng;
						var distance = pow((locLat - lat),2) + pow((locLng - lng),2);
						if (minDistance > 0 && distance < minDistance) {
							minDistance = distance;
							index = i;
						}
					}
					console.log(locations[0] + 'hello');
					$('#building').attr('value', locations[index]);
				},
				failure: function() {
					console.log('gross');
				},
				dataType: 'jsonp'
			});
		}

		function success(position) {
			var lat = position.coords.latitude;
			var lng = position.coords.longitude;
			loadLocations(lat, lng);
			

			
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



function validateForm() {
	var building = $('#building').val();
	var additional = $('#additional').val();
	var description = $('#description').val();
	console.log(building);
	if(!building) {
		$('#building').focus();
		return false;
	}
	if(!additional) {
		$('#additional').focus();
		return false;
	}
	if(!description) {
		$('#description').focus();
		return false;
	}
}