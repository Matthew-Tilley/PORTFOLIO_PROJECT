$(document).ready(function()
{
	function intro()
	{
		var a = document.getElementById("H201");
		var b = document.getElementById("H202");
		var c = document.getElementById("H203");
		
		var cycler = [b,c];
		
		
		$.each(fader, function(i, item)
		{
			
			setTimeout(function()
			{
				$(item).fadeIn();
			});
			
		});
		
	}
	

	
	
});

