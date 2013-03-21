var locations;

$(document).ready(function() {
    if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success, error);
	} else {
		error('Geolocation not supported');
	}

	function success(position) {
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
		loadLocations(lat, lng);
	}
	function error(msg) {
		var errMsg = typeof msg == 'string' ? msg : "Geolocation failed";
		$('#msg').html(errMsg);
	}

});

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
	}
}

function loadLocations(lat, lng) {
	$.ajax({
		url: '/location_results',
		success: function(data) {
			locations = data;
			console.log(locations[0]);
			var buildingSelect = document.getElementById('building');
			console.log(locations.length);
			for (i = 0; i < locations.length; i++) {
				try {
					console.log(locations[i].name);
					buildingSelect.add(locations[i].name, null);
				} catch (err) {
					buildingSelect.add(locations[i].name);
				}
			}

			var minDistance = -1;
			var index = -1;

			for (var i = 0; i < locations.length; i++) {
				var locLat = locations[i].lat;
				var locLng = locations[i].lng;
				var distance = (locLat - lat)*(locLat - lat) + (locLng - lng)*(locLng - lng);
				if (minDistance < 0 || distance < minDistance) {
					minDistance = distance;
					index = i;
				}
			}
			//$('#building').attr('value', locations[index].name);








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