var H201 = document.getElementById("H201");
var H202 = document.getElementById("H202");
var H203 = document.getElementById("H203");

var intro_1 = [H201, H202, H203];

$(document).ready(function()
{	
		
	$.each(intro_1, function(i, item){
		
		setTimeout(function(){
			$(item)	.delay(2000).fadeIn(1500)
					.fadeOut(1500).delay(2000);
		}, i * 3000);
		
	})
	
	$("#LOG01")	.delay(11000)
				.fadeIn(3000);
	$("#H204")	.delay(11250)
				.fadeIn(4000);
	
	$("#WRA02")	.delay(15000)
	  			.fadeTo(0);
	
	$(window)	.delay(16000, function()
	{
		$("#WRA01").fadeIn(2000);
	});
	
	
});

