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
	if(e=='general') {
		$('#general_select').show();
		$('#school_select').hide();
		$('#college_select').hide();
		$('#general_default').hide();
		$('#school_default').show();
		$('#college_default').show();
	}
	else if(e=='school') {
		$('#general_select').hide();
		$('#school_select').show();
		$('#college_select').hide();
		$('#general_default').show();
		$('#school_default').hide();
		$('#college_default').show();
	}
	else {
		$('#general_select').hide();
		$('#school_select').hide();
		$('#college_select').show();
		$('#general_default').show();
		$('#school_default').show();
		$('#college_default').hide();
	}
	document.querySelector('#'+e).scrollIntoView({behavior:'smooth'});
}

function showskills(e) {
	$("#lang,#web,#frameworks").hide();
	$("#"+e).show();
	if(e=='lang') {
		$('#lang_select').show();
		$('#web_select').hide();
		$('#frameworks_select').hide();
		$('#lang_default').hide();
		$('#web_default').show();
		$('#frameworks_default').show();
		$('#lang_text').show();
		$('#web_text').hide();
		$('#frameworks_text').hide();
	}
	else if(e=='web') {
		$('#lang_select').hide();
		$('#web_select').show();
		$('#frameworks_select').hide();
		$('#lang_default').show();
		$('#web_default').hide();
		$('#frameworks_default').show();
		$('#lang_text').hide();
		$('#web_text').show();
		$('#frameworks_text').hide();
	}
	else {
		$('#lang_select').hide();
		$('#web_select').hide();
		$('#frameworks_select').show();
		$('#lang_default').show();
		$('#web_default').show();
		$('#frameworks_default').hide();
		$('#lang_text').hide();
		$('#web_text').hide();
		$('#frameworks_text').show();
	}
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