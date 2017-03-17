<?php

	echo "Error messages will be active to debug ";

	echo "<br /><br />";
	$test="How you doin?";
	$ans="meh.";

	echo $test.$ans; 

	$number=7;

	echo ($number-4)*14;
	echo "<br /><br />";

	$name="Buoy";
	echo "how u are , $name";
	echo "I am awesome"+$name;
	echo "<br />";

	$a="name";
	echo "string of string".$$a;	

	echo "<br /><br />";

	echo "array";

	$cities=array("Mumbai","Delhi","Kolkata","Bangalore");
	print_r($cities);
	echo "<br />";

	echo "City nearest to KGP :".$cities[2];
	echo "<br />";

	echo " Is Madras here ".$cities[5];

	$Array2[0]="Bing";
	$Array2[0]="Buffay";
	$Array2[0]="Green";
	$Array2[0]="Geller";
	$Array2[0]="Tribbiani";

	print_r($Array2);
	echo "<br /><br />"

	echo "<a href="index2.php">Conditionals</a>";
	
?>