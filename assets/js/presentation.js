$(document).ready(function () {

	var $win = $(window);
	var $winHeight = $win.height();
	var $winWidth = $win.width();

	console.log($winWidth);
	console.log($winHeight);

	$('.window-size').width($winWidth).height($winHeight);

});