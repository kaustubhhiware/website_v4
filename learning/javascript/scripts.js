
//function for random color generator - courtesy StackOverflow
function getRandomColor()
{	
	var letters = '0123456789ABCDEF'.split('');	//split each char to generate array
	var color = '#';	
	for (var i = 0; i < 6; i++ ) 
	{	
		color += letters[Math.round(Math.random() * 15)];	
	}	
	return color;
}



//Date.now() returns the number of milliseconds since epoch
	var clikedTime;
	var createdTime;
	var reactTime;
	var bestTime=10000;
	var count=0;
	var average;
	var totalTime=0;
	function makeBox(){

		var time = Math.random();
		time = time * 5000;

		//set time out for how much duration after which refreshes
		setTimeout(function(){

		if(Math.random()>0.7)
		{	//prob of circle is 0.3
			document.getElementById("box").style.borderRadius="100px";
		}

		document.getElementById("box").style.backgroundColor=getRandomColor();
		//alter color

		//random positions
		var top=Math.random();	
	 	top=top*300;	
	 	 	 	 	
	 	var left=Math.random();	 	 	 	
	 	left=left*500;	
	 	 	 	 	
	 	document.getElementById("box").style.top=top+"px";	
	 	document.getElementById("box").style.left=left+"px";	


		document.getElementById("box").style.display="block";
		//block is standard

		createdTime=Date.now();

		},time);
		//time ms time for which function runs

	}	

	document.getElementById("box").onclick=function()
	{
		clikedTime=Date.now();
		reactTime=(clikedTime-createdTime)/1000;

		this.style.display="none";
		document.getElementById("time").innerHTML=
		document.getElementById("time").innerHTML+" "+reactTime+"s";

		count++;
		totalTime = totalTime + reactTime;
		if (bestTime>reactTime) {
			bestTime = reactTime;
		}
		makeBox();

	}
	makeBox();
	//need to initialie for first time

	document.getElementById("stats").onclick=function(){

		if(bestTime!=10000)
		{
			document.getElementById("best").innerHTML=bestTime;

			average = totalTime / count;
			average = 100 * average;
			average = Math.floor(average);
			average = average / 100;

			document.getElementById("avg").innerHTML=average;
		}
		else{
			document.getElementById("best").innerHTML="-_- ";	
			document.getElementById("avg").innerHTML="-_- ";	
		}
	}
