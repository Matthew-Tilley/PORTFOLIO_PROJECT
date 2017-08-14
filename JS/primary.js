$(document).ready(function()
{
	var a = document.getElementById("H201");
	var b = document.getElementById("H202");
	
	var cycle = [a,b];
	
	var counter = 0;
	
	function intro()
	{
		cycle.forEach(function()
		{
			$(cycle[counter])	.delay(1000)
								.fadeIn(1000)
								.fadeOut(1000)
			counter++;
					
		});
		
		/*for (i=0; i<cycle.length; i++)
		{
			$(cycle[counter])	.delay(2000)
							.fadeIn(2000)
							.fadeOut(2000)
			counter++
			break
			intro();
		}		*/
	}
	
	intro();
		
		
		
	
	
	
	
});