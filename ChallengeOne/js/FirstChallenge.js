$(document.body).ready(function() {
	document.getElementById('partOne').focus();
});

$(document.body).on("click", "#firstChallengeCheck", function() {
	var dir = document.getElementById('partOne').value;
	var file = document.getElementById('partTwo').value;
	$.ajax({
		url: 'scripts/CheckOne.php',
		type: 'POST',
		data: {arg1: dir,
		       arg2: file},
		success: function(check) {
			if(check) {
				alert("Congrats. There was much rejoicing. I'm glad you got the easy one.");
				window.location.href = 'http://crashthebot.net/MacDaddy/ChallengeTwo/';
			} else {
				alert("Womp womp. Nice try, though.");
			}
		}
	});
	document.getElementById('firstURL').reset();
	document.getElementById('partOne').focus();
});
