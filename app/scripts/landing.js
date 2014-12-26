$(document).ready(function(){
	
	$('.hero-content h3').click(function(){	
	var subText = $(this).text();
	$(this).text(subText + "! ");
	});

	$('.hero-content h3').hover(function(){
	$(this).css('color','pink');
	});

	$('.hero-content h1').click(function(){	
	$(this).fadeOut();
	});

	var onHoverAction = function(event){
		console.log('Hover action triggered.');
		$(this).animate({'margin-top': '10px'});
	};

	var offHoverAction = function(event){
		console.log('Off-Hover action triggered.');
		$(this).animate({'margin-top': '0px'});
	};

	$('.selling-points .point').hover(onHoverAction, offHoverAction);

	$('.selling-points .point h5').click(function(){
		$(this).css('font-size', '30px');
	});
	


});