
/* sub*/
$(function () {
	
	$(window).scroll(function () {
		const scrollTop = $(this).scrollTop();
		$('.pos').text(scrollTop);
		
		const history3 = $('.history-3').offset().top;
		let changeScroll;
		changeScroll = scrollTop - history3;
		
		if (scrollTop > history3 * 0.8) {
			$('.icon i').stop().animate({top: (changeScroll + 300) + "px"}, {queue: false, duration: 600});
		}

		if (scrollTop > 1300) {
			$('.history-4 li').addClass('active');
		}
		if (scrollTop > 2700) {
			$('.history-6 li').addClass('active');
		}
		if (scrollTop > 4300) {
			$('.history-8 li').addClass('active');
		}
		
		if (scrollTop > 600) {
			$('.history-3 li').addClass('active');
		}
		if (scrollTop > 2000) {
			$('.history-5 li').addClass('active');
		}
		if (scrollTop > 3600) {
			$('.history-7 li').addClass('active');
		}
		
	});
	
	
	
});