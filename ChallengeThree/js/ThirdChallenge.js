$(document.body).ready(function() {
	document.getElementById('plaintext').focus();
});

$(document.body).on("click", "#thirdChallengeCheck", function() {
	var plaintext = document.getElementById('plaintext').value;
	var pin = document.getElementById('pin').value;
	$.ajax({
		url: 'scripts/CheckThree.php',
		type: 'POST',
		data: {arg1: plaintext,
		       arg2: pin},
		success: function(check) {
			if(check) {
				alert("The good news is that you're right. The bad news is that I just texted that to everyone. ;\)");
				window.location.href = 'http://crashthebot.net/MacDaddy/Congratulations/';
			} else {
				alert("Come on, you're smarter than that.");
			}
		}
	});
	document.getElementById('lastCheck').reset();
	document.getElementById('plaintext').focus();
});
