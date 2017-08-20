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
				.fadeIn(3000)
				.delay(1000)
				.fadeOut(1000);
	
	$("#H204")	.delay(11250)
				.fadeIn(4000)
				.fadeOut(700);
	
	$("#LOC02").delay(16000)
				.fadeTo(4000, 0);
	
	
	
	
	
	
	
	
	
});

