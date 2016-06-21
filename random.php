<?php

$array = array();

for ($i = 0; $i <= 5000; $i++) {
	$whatever = rand(1,625);
	array_push($array,$whatever);
}

$string = '';

for ($i = 0; $i < count($array); $i++) {
	if(! gmp_perfect_square($array[$i])) {
		$string .= $array[$i].",";
	} elseif ($array[$i] === 361) {
		$string .= $array[$i].",";
	}
}

$string = rtrim($string, ",");

echo "var numbers = [".$string."];";

?>
