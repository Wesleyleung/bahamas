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
	}
}