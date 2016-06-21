<?php

$plaintext = $_POST["arg1"];
$pin = $_POST["arg2"];

$plaintext = str_replace(' ', '', $plaintext);
$plaintext = preg_replace('/[^A-Za-z0-9]/', '', $plaintext);
$plaintext = strtolower($plaintext);

if(($plaintext === "justaheadsupimgivinghenrymyfirstrounddraftpick") && ($pin === "576354")) {
	echo shell_exec ('sh /var/www/html/MacDaddy/ChallengeThree/scripts/text.sh');
	print true;
} else {
	print false;
}
?>
