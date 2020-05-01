


$(document).ready( function() {
	var $label = $('.js-label');

	$label.click( function(event){
		event.preventDefault();
		$(this).fadeOut(300);
		
		setTimeout(function(){
			$(this).addClass('no-touch');
		}, 300);
	})
})