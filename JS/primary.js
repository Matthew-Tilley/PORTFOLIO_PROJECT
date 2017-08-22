$(document).ready(function()
{
	function intro()
	{
		var a = document.getElementById("H201");
		var b = document.getElementById("H202");
		var c = document.getElementById("H203");
		
		var cycler = [b,c];
		
		
		setTimeout(function(item)
		{
			$.each(cycler()
			{
				$(cycler) 	.fadeIn(1000)
							.delay(1000)
							.fadeOut(1000);
			});
			
			
			
		});
		
	}
	
	intro();
	
	
});

