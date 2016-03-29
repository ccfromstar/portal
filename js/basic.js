$(function(){
	var _width = $(window).width();
	if(_width < 1280){
		$('#notsupport').removeClass('none');
	}else{
		$('#canvas').removeClass('none');
	}
});
