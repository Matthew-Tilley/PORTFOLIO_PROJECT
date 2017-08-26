

$(document).ready(function()
{
	
	function intro()
	{
		var H201 = document.getElementById("H201");
		var H202 = document.getElementById("H202");
		var H203 = document.getElementById("H203");	
		
		var wordfade = [H201, H202, H203];
		
		$.each(wordfade, function(index, element)
		{
			setTimeout(function()
			{
				$(element)	.fadeIn(2000)
							.fadeOut(2000);
				
			}, index * 4000);
			
		});
		
	}
	
	intro();
	
	
});




