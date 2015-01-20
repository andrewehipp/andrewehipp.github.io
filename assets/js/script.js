$(document).ready(function () {

// begin: HIDE ADDRESS BAR ON MOBILE BROWSERS =====
var win = $(window);
var doc = $(document);

// If there's a hash, or addEventListener is undefined, stop here
if( !location.hash && win.addEventListener ){

	//scroll to 1
	window.scrollTo( 0, 1 );
	var scrollTop = 1,
		getScrollTop = function(){
			return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
		},
	
		//reset to 0 on bodyready, if needed
		bodycheck = setInterval(function(){
			if( doc.body ){
				clearInterval( bodycheck );
				scrollTop = getScrollTop();
				win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
			}	
		}, 15 );
	
	win.addEventListener( "load", function(){
		setTimeout(function(){
			//at load, if user hasn't scrolled more than 20 or so...
			if( getScrollTop() < 20 ){
				//reset to hide addr bar at onload
				win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
			}
		}, 0);
	} );
}
// end: HIDE ADDRESS BAR ON MOBILE BROWSERS =====

		// Begin: LazyLoad
		$("img.lazy").show().lazyload({
    		effect : "fadeIn",
		    threshold : 500
		});
		// End: LazyLoad


$(function(){ // document ready

	/* Begin: Sticky Sidebar */

		var winWidth = $(window).width()

	if (!!$('.sticky').offset() && winWidth > 767) { // make sure ".sticky" element exists

		var stickyTop = $('.sticky').offset().top, // returns number 
			stickyWidth = $('.sticky').width();

		$(window).resize(function(){
			$('sticky').css('width','');
			stickyWidth = $('.sticky').width();
			$('sticky').width(stickyWidth);
		});

		$(window).scroll(function(){ // scroll event

			var windowTop = $(window).scrollTop(); // returns number 

			if (stickyTop < windowTop){
				$('.sticky').addClass('stuck').width(stickyWidth);
			}
			else {
				$('.sticky').removeClass('stuck').css('width','');
			}
		});

	}
	/* End: Sticky Sidebar */

	/* Begin: iPhone Group */
	$('.iphone-group.has-3 button').on('click', function(){
		if($(this).hasClass('next')){

			$('.iphone-group.has-3 .iphone').each(function(){
				var iPhone = $(this);

				if(iPhone.hasClass('current-3')){
					iPhone.removeClass('current-3').addClass('current-2');
				} else if (iPhone.hasClass('current-2')) {
					iPhone.removeClass('current-2').addClass('current-1');
				} else if (iPhone.hasClass('current-1')) {
					iPhone.removeClass('current-1').addClass('current-3');
				}
			});
		} else if ($(this).hasClass('prev')){
			$('.iphone-group.has-3 .iphone').each(function(){
				var iPhone = $(this);

				if(iPhone.hasClass('current-3')){
					iPhone.removeClass('current-3').addClass('current-1');
				} else if (iPhone.hasClass('current-2')) {
					iPhone.removeClass('current-2').addClass('current-3');
				} else if (iPhone.hasClass('current-1')) {
					iPhone.removeClass('current-1').addClass('current-2');
				}
			});
		}
	});
	$('.iphone-group.has-4 button').on('click', function(){
		if($(this).hasClass('next')){

			$('.iphone-group.has-4 .iphone').each(function(){
				var iPhone = $(this);

				if(iPhone.hasClass('current-4')){
					iPhone.removeClass('current-4').addClass('current-3');
				} else if(iPhone.hasClass('current-3')){
					iPhone.removeClass('current-3').addClass('current-2');
				} else if (iPhone.hasClass('current-2')) {
					iPhone.removeClass('current-2').addClass('current-1');
				} else if (iPhone.hasClass('current-1')) {
					iPhone.removeClass('current-1').addClass('current-4');
				}
			});
		} else if ($(this).hasClass('prev')){
			$('.iphone-group.has-4 .iphone').each(function(){
				var iPhone = $(this);

				if(iPhone.hasClass('current-4')){
					iPhone.removeClass('current-4').addClass('current-1');
				} else if(iPhone.hasClass('current-3')){
					iPhone.removeClass('current-3').addClass('current-4');
				} else if (iPhone.hasClass('current-2')) {
					iPhone.removeClass('current-2').addClass('current-3');
				} else if (iPhone.hasClass('current-1')) {
					iPhone.removeClass('current-1').addClass('current-2');
				}
			});
		}
	});
	/* End: iPhone Group */


	$(window).load(function() { // makes sure the whole site is loaded
		
		// Begin: Preloader
		$('.loader').fadeOut(); // will first fade out the loading animation
		$('.preload').delay(350).fadeIn(); // will fade out the white DIV that covers the website.
		// End: Preloader
	})


});

})( jQuery, this); //-- end jQuery/AUI