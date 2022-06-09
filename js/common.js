$(function () {
	
	// Click, MouseEvent, Etc..
	$('.main-menu').on({
		mouseenter: function () {
			$('.header').addClass('active');
		},
		mouseleave: function () {
			$('.header').removeClass('active');
		},
		
	});

	///////반응형//////////

	$(function () {

		$('.nav-btn').click(function () {
			$(this).toggleClass('active');
			$('.main-menu li').stop().slideToggle();
		});

	});


	$(window).resize(function () {

		if ($(window).width() > 768){
			$('.main-menu li').css('display','block');


		} else if($(window).width() < 768) {
			$('.nav-btn').addClass('active');
		}



	});

});


