$(document).ready(function()
{
	var a = document.getElementById("H201");
	var b = document.getElementById("H202");
	
	var test = ["THIS", "THAT", "ELSE", "WHAT"];
	
	test.forEach(function(item, index)
	{
		setInterval(function(){ console.log("HELLO " + item);	}, 5000);
	});
	
});