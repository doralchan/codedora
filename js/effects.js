$(document).ready(function(){

	$('.column').hover(
		function(){
	   		$(this).fadeTo("fast", 0.6);
	   	},function() {
	    	$(this).fadeTo("fast", 1);
	});

});