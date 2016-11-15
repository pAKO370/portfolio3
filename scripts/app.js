
(function(){
	

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
	
})();