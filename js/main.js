$(document).ready(function() {

    //AboutColorChanger
    var colors = ['rgba(26, 188, 156, 0.3)', 'rgba(46, 204, 113, 0.3)', 'rgba(52, 152, 219, 0.3)', 'rgba(155, 89, 182, 0.3)', 'rgba(241, 196, 15, 0.3)', 'rgba(230, 126, 34, 0.3)', 'rgba(231, 76, 60, 0.3)'];
    //Assign Random Colors @ the start
    $('.about-review-text-container').each(function() {
        var color = Math.floor(Math.random() * colors.length);
        $(this).css('background-color', colors[color]);
    });
    $('.about-review-text-container').hover(function() {
        var color = Math.floor(Math.random() * colors.length);
        $(this).css('background-color', colors[color]);
    });
});

//Scrolling Function for Nav Bar
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('header').addClass('shrink-header');
    } else {
        $('header').removeClass('shrink-header');
    }
});

// Navigation
function changePage(target) {
    $('section.page').removeClass('active');
    $('#' + target).addClass('active');
};