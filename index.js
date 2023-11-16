// When the user scrolls, execute stickyNav
window.onscroll = function () {
	stickyNav()
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

function stickyNav() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
};

//fade header text on scroll

$(function () {
	$(window).scroll(function (e) {
		if ($(this).scrollTop()) {
			$('.header-text-box').fadeOut();
		} else {
			$('.header-text-box').fadeIn();
		}
	});
});

//animations

$(document).ready(function () {

	$("#about-heading").css("opacity", 0);
	$("#about-heading").waypoint(function () {
		$("#about-heading").addClass("lightSpeedIn")
	}, {
		offset: "80%"
	});
	
	$("#projects-heading").css("opacity", 0);
	$("#projects-heading").waypoint(function(){
		$("#projects-heading").addClass("fadeIn")
	}, {
		offset: "80%"
	});
	
	$("#kojo-img").css("opacity", 0);
	$("#kojo-img").waypoint(function () {
		$("#kojo-img").addClass("rotateInDownLeft")
	}, {
		offset: "100%"
	});
	
	$("#wiki-img").css("opacity", 0);
	$("#wiki-img").waypoint(function () {
		$("#wiki-img").addClass("rotateInDownLeft")
	}, {
		offset: "100%"
	});
	
	$("#weather-img").css("opacity", 0);
	$("#weather-img").waypoint(function () {
		$("#weather-img").addClass("rotateInDownLeft")
	}, {
		offset: "100%"
	});
	
	$("#survey-img").css("opacity", 0);
	$("#survey-img").waypoint(function () {
		$("#survey-img").addClass("rotateInDownLeft")
	}, {
		offset: "100%"
	});
	
	$("#about-one, #about-two, #about-three, #about-four").css("opacity", 0);
	$("#about-one, #about-two, #about-three, #about-four").waypoint(function () {
		$("#about-one, #about-two, #about-three, #about-four").addClass("fadeInUp")
	}, {
		offset: "80%"
	});
	
	$("#contact-heading").css("opacity", 0);
	$("#contact-heading").waypoint(function(){
		$("#contact-heading").addClass("fadeIn")
	}, {
		offset: "80%"
	});
	
	$(".blackground").css("opacity", 0);
	$(".blackground").waypoint(function(){
		$(".blackground").addClass("fadeInLeft")
	}, {
		offset: "80%"
	});
	
	$(".projects-info").css("opacity", 0);
	$(".projects-info").waypoint(function(){
		$(".projects-info").addClass("fadeInRight")
	}, {
		offset: "80%"
	});
	
});