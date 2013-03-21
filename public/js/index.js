function picClickFunction() {
	$('#upload_input').click();
}

function showPreview(input) {
	if (input.files && input.files[0]) {
	    var reader = new FileReader();
		reader.onload = function(e) {
			$('#pic').attr('src', e.target.result);
		}
		reader.readAsDataURL(input.files[0]);

		function success(position) {
			var lat = position.coords.latitude;
			var lng = position.coords.longitude;
			loadLocations(lat, lng);
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

function loadLocations(lat, lng) {
	$.ajax({
		url: '/location_results',
		success: function(data) {
			var minDistance = -1;
			var index = -1;

			for (var i = 0; i < data.length; i++) {
				var locLat = data[i].lat;
				var locLng = data[i].lng;
				var distance = (locLat - lat)*(locLat - lat) + (locLng - lng)*(locLng - lng);
				if (minDistance < 0 || distance < minDistance) {
					minDistance = distance;
					index = i;
				}
			}
			//console.log(data[0].name + 'hello');
			$('#building').attr('value', data[index].name);
		},
		failure: function(error) {
			console.log('gross');
			console.log(error);
		},
		dataType: 'json'
	});
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