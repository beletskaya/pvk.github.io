$(document).ready(function() { 
	
	$('.gallery').on('click', 'a', function (e) {
	  e.preventDefault();
	  Lightbox.init($(this));
	});
var fActive='';
function filterColor(color){
if(fActive!=color){
	$('.sort').filter('.'+color).slideDown();
	$('.sort').filter(':not(.'+color+')').slideUp();fActive=color;}
}
	$('.f-red').click(function(){filterColor('red');});
	$('.f-blue').click(function(){filterColor('blue');});
	$('.f-green').click(function(){filterColor('green');});
	$('.f-yellow').click(function(){filterColor('yellow');});
	$('.f-all').click(function(){$('div').slideDown();fActive='all';});


 
	$('#toTop').click(function() {

	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);

		});

	$(function(){
        $('#Container').mixItUp();
    });

	var h_hght = 450; // высота шапки
	var h_mrg = 200;    // отступ когда шапка уже не видна
	                 
	$(function(){
	 
	    var elem = $('.top_nav');
	    var top = $(this).scrollTop();
	     
	    if(top > h_hght){
	        elem.css('top', h_mrg);
	    }           
	     
	    $(window).scroll(function(){
	        top = $(this).scrollTop();
	         
	        if (top+h_mrg < h_hght) {
	            elem.css('top', (h_hght-top));
	        } else {
	            elem.css('top', h_mrg);
	        }
	    });
	 
	});

});