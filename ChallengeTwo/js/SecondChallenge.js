$(document.body).ready(function() {
	document.getElementById('directory').focus();
});

$(document.body).on("click", "#secondChallengeCheck", function() {
	var dir = document.getElementById('directory').value;
	$.ajax({
		url: 'scripts/CheckTwo.php',
		type: 'POST',
		data: {arg1: dir},
		success: function(check) {
			if(check) {
				alert("Two down. One to go.");
				window.location.href = "http://crashthebot.net/MacDaddy/ChallengeThree/";
			} else {
				alert("Womp womp. Nice try, though.");
			}
		}
	});
	document.getElementById('secondCheck').reset();
	document.getElementById('directory').focus();
});
