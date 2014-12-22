$(document).ready(function(){
		$(".third").hover(
			function() {
				$(this).animate({
					height:"toggle",
					opacity: 0.75,
					bottom: "+=25",
					
				}
				,500
				,function(){
					
				});
			}, 
			function() {
				console.log("out")
				$(this).animate({
					height:"toggle",
					opacity: 1.0,

				})
			}
			);
	})
