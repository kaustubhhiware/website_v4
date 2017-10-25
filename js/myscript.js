function isScrolledIntoView(elem) {
	var $elem=$(elem);
	var $window=$(window);
	var docViewTop=$window.scrollTop();
	var docViewBottom=docViewTop+$window.height();
	var elemTop=$elem.offset().top;
	var elemBottom=elemTop+$elem.height();
	return((elemBottom<=docViewBottom)&&(elemTop>=docViewTop));
}
/*
$(window).scroll( function() {
	if(isScrolledIntoView("#landed")){ window.location.hash='#'; }
	else if(isScrolledIntoView("#about")){ window.location.hash='#about'; }
	else if(isScrolledIntoView("#skills")){ window.location.hash='#skills'; }
	else if(isScrolledIntoView("#projects")){ window.location.hash='#projects'; }
	else if(isScrolledIntoView("#contact")){ window.location.hash='#contact'; }
	else if(isScrolledIntoView("#contact_")){ window.location.hash='#contact_'; }
});
*/

function showabout(e) {
	$("#general,#school,#college").hide();
	$("#"+e).show();
	$('#'+e+'_select').show();
	document.querySelector('#'+e).scrollIntoView({behavior:'smooth'});
}

function showskills(e) {
	$("#lang,#web,#frameworks").hide();
	$("#"+e).show();
	$('#'+e+'_select').show();
	document.querySelector('#'+e).scrollIntoView({behavior:'smooth'});
}

$(document).on('click','a[href^="#"]',function(e) {
	var id=$(this).attr('href');
	var $id=$(id); 
	if($id.length===0){return;}e.preventDefault();

	var pos=$(id).offset().top;
	$('body, html').animate({scrollTop:pos},1000);
});

function burger_transition() {
	$('#menu-toggle').click(function() {
		$(this).toggleClass('open');
	});
}

$(document).ready(burger_transition());