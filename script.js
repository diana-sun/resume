function dynamicResize(){
	var winHeight = $( window ).height();
	$('.jumbo').css('height',winHeight);
	$('.jumbo-text').css('bottom',winHeight/2 + 100);
	$('#jumbo-nav').css('height', winHeight/2 + 200);
}

$(document).ready(function(){
	dynamicResize();
});

$( window ).resize(function() {
  dynamicResize();
});