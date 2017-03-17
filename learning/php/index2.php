<?php

	$a =2;
	$b=2;
	$c=2;

	# && replaced by AND
	# || replaced by OR
	/*
		This comment is HUGE!
	*/
	if($a==$b AND $b==$c)
	{
		echo"a , b ,c are identical";
	}
	else {
		echo("atleast one of them is different");
	}

	echo "<br />10 to 1 countdown";
	for($i=10 ; $i<=1 ; $i--){

		echo "<br />".$i;
	}
	echo "<br />";

	//to transit through array , we have foreach
	$cities=array("Mumbai","Delhi","Kolkata","Bangalore");
	foreach ($array as $key => $value) {

		echo "Key :$key Value : $value <br />";
	}

	echo "Demo of while loop";
	$t=1;

	while($t<15){
#for arrays , proceed as : while($array[$i]) - it means jak tak hai elements
		echo $t."<br />";
		$t=$t+2;
	}



?>
