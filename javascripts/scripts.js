$(document).ready(function(){

	"use strict";
	
	////////////////////// Initialize Sliders
	
	$('.slider').flexslider({
		directionNav: false
		
	});
	
	$('.testimonials-slider').flexslider({
		animation: "slide",
		slideshow: true,
		controlNav: false,
		
		
	});
	
	$('.work-slider').flexslider({
		directionNav: false,
		animation: "slide"
		
	});
	
	$('#featured-work-slider').flexslider({
		slideshow: false,
		directionNav: false,
		animation: "slide"
	});
	
	
	////////////// Initialize Smooth Scroll (for back to top button)
	
	$(".scroll").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});
	
	
	////////////////////// Isotope Masonry
	
		// filter items when filter link is clicked
	
	$('#twocol-filters a').click(function(){
		$('#twocol-filters li').removeClass('active-filter');
		$(this).parent().addClass('active-filter');
	  var selector = $(this).attr('data-filter');
	  $('#twocol-container').isotope({ filter: selector });
	  return false;
	
	});
		
	$('#threecol-filters a').click(function(){
		$('#threecol-filters li').removeClass('active-filter');
		$(this).parent().addClass('active-filter');
	  var selector = $(this).attr('data-filter');
	  $('#threecol-container').isotope({ filter: selector });
	  return false;
	
	});
	
		// Initialize Masonry
	
	if(document.getElementById("#twocol-container") !== null){
		
		$('#twocol-container').isotope({
	
		  itemSelector : '.work-item',
		  layoutMode : 'fitRows'
		  
		});
		
		
		
		

	}
	
	if(document.getElementById("#threecol-container") !== null){
		$('#threecol-container').isotope({
	
		  itemSelector : '.work-item',
		  layoutMode : 'fitRows'
		  
		});		
	
	}
	
	
	setTimeout(function(){$('.trigger').trigger('click');},500);
	
	////////// Mobile Responsive Menu
	
	$('#mobile-toggle').click(function(){
	
		if($('#main-nav').hasClass('menu-open')){
		
			$('#main-nav').removeClass('menu-open');
		
		}else{
		
			$('#main-nav').addClass('menu-open');
		
		}
	
	});
	
	
	////////// Home Social Hovers
	
	$('#home-social .twitter').mouseenter(function(){
	
		$('#home-social').addClass('twitter-bg');
		$('#home-social h3').css('color', '#fff');
		$('#home-social p').css('color', '#fff');
		$('#home-social a').css('color', '#fff');
	
	});
	
	$('#home-social .facebook').mouseenter(function(){
	
		$('#home-social').addClass('facebook-bg');
		$('#home-social h3').css('color', '#fff');
		$('#home-social p').css('color', '#fff');
		$('#home-social a').css('color', '#fff');
	
	});
	
	$('#home-social .dribbble').mouseenter(function(){
	
		$('#home-social').addClass('dribbble-bg');
		$('#home-social h3').css('color', '#fff');
		$('#home-social p').css('color', '#fff');
		$('#home-social a').css('color', '#fff');
	
	});
	
	$('#home-social .behance').mouseenter(function(){
	
		$('#home-social').addClass('behance-bg');
		$('#home-social h3').css('color', '#fff');
		$('#home-social p').css('color', '#fff');
		$('#home-social a').css('color', '#fff');
	
	});
	
	$('#home-social i').mouseleave(function(){
	
		$('#home-social').removeClass('facebook-bg');
		$('#home-social').removeClass('twitter-bg');
		$('#home-social').removeClass('dribbble-bg');
		$('#home-social').removeClass('behance-bg');
		$('#home-social h3').css('color', '#222');
		$('#home-social p').css('color', '#666');
		$('#home-social a').css('color', '#333');
	
	});
	
	
	
	////////// Contact Form Code
	
	//Contact Form Code:
		$(function (e) {
			$(".form-button").click(function (e) {
				var $error = 0;
				var name = $("#form-name").val();
				var email = $("#form-email").val();
				var text = $("#form-msg").val();
				var security = $("#form-security").val();
			
				
				if(name == "" || email=="" || text=="" ){
					$('#details-error-wrap').fadeIn(1000);
					$error = 1;
					
				}else{
					$('#details-error-wrap').fadeOut(1000);
				}
				
				if(security != 8 ){
					$('#security-error-wrap').fadeIn(1000);
					$error = 1;
					
				}else{
					$('#security-error-wrap').fadeOut(1000);
				}
				
				if( /(.+)@(.+){2,}\.(.+){2,}/.test(email) ){
				  
				} else {
				  $('#details-error-wrap').fadeIn(1000);
				  $error = 1;
				}
				
	
				
				var dataString = 'name=' + name + '&email=' + email + '&text=' + text;
				
				if($error == 0){
					$.ajax({
						type: "POST",
						url: "mail.php",
						data: dataString,
						success: function () {
							$('#details-error-wrap').fadeOut(1000);
							$('#security-error-wrap').fadeOut(1000);
							$('#form-sent').fadeIn(1000);
						}
					});
					return false;
				}
				
				e.preventDefault();
			});
		});
		
	
	
	
	
	
	
	
	


});
