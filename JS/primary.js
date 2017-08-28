

$(document).ready(function()
{
	$("#LOC01")	.delay(16000)
				.fadeTo(4000, 0);
	
	
	setTimeout(function()
	{
		$("#WRA01").hide()
		$("#WRA02").css("display", "grid");
	}, 18000);
	
	
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
		
		setTimeout(function()
		{
			
			$("#WRA01").fadeOut(4000);
			$("#WRA02").fadeIn(4000);
			
			
		}, 10000);
		
		
		
	}
	
	intro();
	
	
});




