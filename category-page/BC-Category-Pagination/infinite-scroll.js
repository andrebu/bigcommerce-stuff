var catCon = $('#CategoryContent ul.ProductList');
var speedBump = 1;
var pageIndex = 2;
var maxPages = $('.productlist-page .product-nav:first li:not(.ActivePage)').length + 1;
var nextPgUrl = 'http://dankstop.com/concentrate-pipes-and-dab-rigs/?page=';


$('.productlist-page .product-nav').hide();

scrollDetector();

function scrollDetector() {
/*
	if (pageIndex > maxPages) {
		return;
	}	
*/
	$(window).scroll( function() {
		var scrollT = $(window).scrollTop();
		var windowH = $(window).height();
		var docH = $(document).height();
		if ( (scrollT > (docH - (windowH * 3.5))) && (scrollT < (docH - (windowH * 3))) && (speedBump == 1) && (pageIndex <= maxPages) ) {
			speedBump = 0;
			console.log($(window).scrollTop());
			console.log($(document).height() - ($(window).height() * 3));
			console.log($(document).height() - ($(window).height() * 3.5));
			$('<div>').load(nextPgUrl+pageIndex+' #CategoryContent ul.ProductList li', function(data) {
				console.log($(data).find("#CategoryContent ul.ProductList > li"));
				catCon.append($(data).find("#CategoryContent ul.ProductList > li"));
				console.log(pageIndex);
				pageIndex++;
				speedBump = 1;
				$(data).appendTo(this);
				//console.log(data);
			});
	/*
			$('div#loadmoreajaxloader').show();
			$.ajax ({
				url: "loadmore.php",
				success: function(html) {
					if (html) {
						$("#postswrapper").append(html);
						$('div#loadmoreajaxloader').hide();
					} else {
						$('div#loadmoreajaxloader').html('<center>No more posts to show.</center>');
					}
				}
			});
	*/
		}
	});
}
