$(document).ready(function() {

	//Navigation
	$('nav ul li').click(function() {
	    $('section article').removeClass('activeArticle');
	    $article = "#" + $(this)[0].innerHTML.toLowerCase() + "Article";
	    $($article).addClass('activeArticle');
	});

	//AboutColorChanger
	var colors = ['rgba(26, 188, 156, 0.3)', 'rgba(46, 204, 113, 0.3)', 'rgba(52, 152, 219, 0.3)', 'rgba(155, 89, 182, 0.3)', 'rgba(241, 196, 15, 0.3)', 'rgba(230, 126, 34, 0.3)', 'rgba(231, 76, 60, 0.3)'];
	//Assign Random Colors @ the start
	$('.aboutReviewTextContainer').each(function(){
		var color = Math.floor(Math.random() * colors.length);
		$(this).css('background-color', colors[color]);
	});
	$('.aboutReviewTextContainer').hover(function(){
		var color = Math.floor(Math.random() * colors.length);
		$(this).css('background-color', colors[color]);
	});
});

//Scrolling Function for Nav Bar
$(window).scroll(function() {
  if ($(document).scrollTop() > 50 && $(document).width() < 640) {
    $('header').addClass('shrinkTheHeader');
  } else {
    $('header').removeClass('shrinkTheHeader');
  }
});

