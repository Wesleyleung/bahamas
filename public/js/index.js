function divClickFunction() {
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
			$('#location')[0].value = lat;
			console.log(lat);
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