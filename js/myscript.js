function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
// change url appropriately when scrolling
$(window).scroll(function() {
    // alert("hey");
    if (isScrolledIntoView("#about")) { window.history.pushState("state", "title", "/#about"); return; }
    else if (isScrolledIntoView("#work")) { window.history.pushState("state", "title", "/#work"); return; }
    else if (isScrolledIntoView("#love")) { window.history.pushState("state", "title", "/#love"); return; }
    else if (isScrolledIntoView("#contact")) { window.history.pushState("state", "title", "/#contact"); return; }
    else { window.history.pushState("state", "title", "/#"); return; }
});

function showabout(e)
{
    $("#general,#school,#college").hide(); 
    $("#"+e).show();
    $('#' + e + '_select').show();
    document.querySelector('#'+e).scrollIntoView({behavior: 'smooth'});
}

function showskills(e)
{
    $("#lang,#web,#frameworks").hide(); 
    $("#"+e).show();
    $('#' + e + '_select').show();
    document.querySelector('#'+e).scrollIntoView({behavior: 'smooth'});
}

// scroll to other # smoothly, not abruptly
// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $(id).offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos},1000);
});
