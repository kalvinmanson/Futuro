$(document).ready(function() {
	$(".tr_menuprin").click( function() {
		$(".menuprin").toggle( "slow", function() {
		    // Animation complete.
		    var offset = $('.menuprin').offset().top;
		    $(".menuprin").animate({
			    "margin-top":  "-"+offset+"px"
			  }, 500, function() {
			    // Animation complete.
			  });
			//$(".menuprin").css( "margin-top", "-"+offset+"px" )
		});
		
	});

	/*Slick Brands */
	$('.brands').slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 6,
	  slidesToScroll: 6,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 5,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
	$(".tr_disponible").click( function () {
		$(".disponible").toggle("slow");
	});
	$(".tr_similares").click( function () {
		$(".similares").toggle("slow");
	});
	$(".tr_punto").click( function () {
		$(".place").toggleClass( "active" );
	});
});