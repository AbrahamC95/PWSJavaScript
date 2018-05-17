var main = function(){
    $('.icon-menu').click(function(){
		$('.menu' ).animate({
		right: '280px'}, 200);
	};
    $('.icon-close').click(function(){
		$('.menu').animate({
            right: '-280px'}, 200);
	};
};
//main function

$(document).ready(main);