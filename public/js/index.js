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
			var select = document.getElementById('building');
			for (i = 0; i < locations.length; i++) {
    			select.options[select.options.length] = new Option(locations[i].name, locations[i].name);
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
			select.options[index].selected = true;
		},
		failure: function(error) {
			console.log(error);
		},
		dataType: 'json'
	});
}


function validateForm() {
	var building = $('#building').val();
	var additional = $('#additional').val();
	var description = $('#description').val();
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