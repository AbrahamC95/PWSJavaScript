var main = function(){
    $('.icon-menu').click(function(){
		$('.menu' ).animate({
		left: '280px'}, 200);
	};
    $('.icon-close').click(function(){
		$('.menu').animate({
            left: '-280px'}, 200);
	};
};
//main function

$(document).ready(main);
