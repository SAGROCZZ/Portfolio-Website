$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Sophomore @ MNIT Jaipur","Java and Spring Enthusiast", "Eat, Sleep, Code... Repeat!"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
    	}
	});


    


	var skillsTopOffSet = $(".skillsSection").offset().top;
	$(window).scroll(function() {

		if (window.pageYOffset > skillsTopOffSet - $(window).height() + 200) {
			$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
    		});
		}

	});

});


/*

I would like to push these code files to GitHub and like each time I save 
something on this file that would be reflected on the GitHub repo without me having to manually do that...

How to do that... Please tell....

*/