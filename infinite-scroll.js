var catCon = $('#CategoryContent ul.ProductList');
$('.product-nav').hide();
$(window).scroll( function() {
	if ( ($(window).scrollTop() > ($(document).height() - ($(window).height() * 3.5))) && ($(window).scrollTop() < ($(document).height() - ($(window).height() * 3))) ) {
		console.log($(window).scrollTop());
		console.log($(document).height() - ($(window).height() * 3));
		console.log($(document).height() - ($(window).height() * 3.5));
		catCon.load('http://dankstop.com/concentrate-pipes-and-dab-rigs/?page=3 #CategoryContent ul.ProductList li', function(data) {
			$(this).append($(data).find("#CategoryContent ul.ProductList > li").html());
			//$(data).appendTo(this);
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