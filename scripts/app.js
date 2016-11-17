
(function(){
	
	
		$('.fed').css({'margin-top': $(window).scrollTop()});
		$('.phil').css({'margin-top': $(window).scrollTop()});

  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
		$('.test').toggleClass('active');
		$('.coach-li').removeClass('show-li');
  });
$('.about-arrow').on('click', function(){
	$('.about-li').toggleClass('show-li');
});
$('.contact-arrow').on('click', function(){
	$('.coach-li').toggleClass('show-li');
});
$(window).resize(function(){
	if($(window).width() > 850){
		$('.test').removeClass('active');
		$('.coach-li').removeClass('show-li');
	}
})

function clickScroll(className, targetClass){
		$(className).click(function(){
			$('html, body').animate({
				scrollTop: ($(targetClass).offset().top-50)
			}, 'slow');
		});
	}
	
	$(window).scroll(function(){
		
		var distance = $(window).scrollTop();
		var opac = ( 1 - (distance / 400));
		var newOpac = Math.round(opac * 10) / 10;
		if(distance > -100){
			$('.fed').css({'margin-top': (distance /3) + 'px'});
			$('.phil').css({'margin-top': (distance /3) + 'px'});
			$('.fed').css({'opacity': newOpac})
			$('.phil').css({'opacity': newOpac})
		}
	});
	
	clickScroll('.ion-chevron-down','.info');
	clickScroll('.info-tab','.info');
	clickScroll('.port','#port');
	clickScroll('.top','.header');
	
})();