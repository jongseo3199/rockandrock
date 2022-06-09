$(function () {
	

	
	// $('.main-menu')
	// 	.on('mouseenter', function () {
	//
	// 	}).on('mouseleave', function () {
	//
	// });
	

	// $('.main-menu').mouseenter(function () {
	//
	// });
	//
	// $('.main-menu').mouseleave(function () {
	//
	// });
	
	$('.item-img img').click(function () {
		$(this).addClass('active');
		$(this).siblings().removeClass('active')
		
		$('.item .item-desc').removeClass('active');
		$('#' + $(this).attr('data-value')).addClass('active');
	});
	
	
	$('.now-1 .box-1').click(function () {
		$('.video-popup').stop().fadeToggle();
		$('.video1').fadeIn();
	});
	$('.now-2 .box-2').click(function () {
		$('.video-popup').stop().fadeToggle();
		$('.video2').fadeIn();
	});
	$('.now-1 .box-3').click(function () {
		$('.video-popup').stop().fadeToggle();
		$('.video3').fadeIn();
	});
	
	$('.video-popup').click(function () {
		$(this).stop().fadeToggle();
	});
	
	
	$('.video').slick({
		dots: true,
		arrows: true, //화살표 사용여부
		prevArrow: $('.product-btn.left'), //이전 화살표
		nextArrow: $('.product-btn.right'), //다음 화살표
		fade: true,
		autoplay: false,
		autoplaySpeed: 1500,
		speed: 1000,
		infinite: true,
		vertical: false,
	});
	
	$('.right-box').slick({
		dots: true,
		arrows: false, //화살표 사용여부
		// prevArrow: $(''), //이전 화살표
		// nextArrow: $(''), //다음 화살표
		fade: true,
		autoplay: true,
		autoplaySpeed: 1500,
		speed: 600,
		infinite: true,
		vertical: false,
		slidesToShow: 1, //보여질 슬라이드 갯수
		slidesToScroll: 1, //넘겨질 슬라이드 갯수
	});
	
});


// scroll event
$(function () {
	
	// scroll event
	$(window).scroll(function () {
		const scrollTop = $(this).scrollTop();
		$('.pos').text(scrollTop);

		const sec2Offset = $('.section-2').offset().top;
		const sec3Offset = $('.section-3').offset().top;
		const sec4Offset = $('.section-4').offset().top;
		const sec5Offset = $('.section-5').offset().top;
		const sec6Offset = $('.section-6').offset().top;
		
		$('.banner').stop().animate({top: (scrollTop + 800) + "px"}, {queue: false, duration: 600});
		
		// $('.icon i').animate({top: (scrollTop + 150) +"px"},{queue: false, duration: 600});
		
		console.log(sec3Offset * 0.8);
		
		if (scrollTop > sec2Offset) {
			$('.header .gnb').css('background', '#eeeeee');
			$('.main-menu > li > a, .sub-menu li a').css('color', 'black');
			$('.item-img').addClass('active');
		} else {
			$('.header .gnb').css('background', 'rgba(255, 255, 255, 0.37)');
			$('.main-menu > li > a, .sub-menu li a').css('color', 'black');
		}
		
		if (scrollTop > sec3Offset * 0.8 && scrollTop < sec4Offset) {
			$('.scene3-desc').addClass('active');
		}
		if (scrollTop > sec4Offset * 0.8) {
			$('.left-box, .right-box').addClass('active');
		}
		if (scrollTop > sec6Offset * 0.8) {
			$('.now-1 li, .now-2 li').addClass('active');
		}
		
		if (scrollTop > 4700) {
			$('.contact').addClass('active');
		}
	});
});

