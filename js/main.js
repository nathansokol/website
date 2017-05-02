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

    var scrollPos = $(document).scrollTop();
    
    toggleHeaderSize(scrollPos);

    toggleNavLinks(scrollPos);

    
});

// Navigation
function changePage(target) {
    var siteHeader = $('#site-header').height();
    $('html, body').animate({
        scrollTop: $('#' + target).offset().top - 36
    }, 1000);
};

function toggleHeaderSize(_scrollPos) {  
    var headerHeight = $('#site-header').height();
    if (_scrollPos > headerHeight) {
        $('header').addClass('shrink-header');
    } else {
        $('header').removeClass('shrink-header');
    }
}

function toggleNavLinks(_scrollPos) {
    var scrollPos = _scrollPos + $('#site-header').height();

    var experienceLoc = $('#experience').position().top - 1;
    var codeLoc = $('#projects').position().top - 1;
    var designLoc = $('#design').position().top - 1;

    $('.nav-link').removeClass('active');

    if (scrollPos < experienceLoc) {
        $('.nav-link.about').toggleClass('active');
    } 
    else if (scrollPos >= experienceLoc &&  scrollPos < codeLoc) {
        $('.nav-link.experience').toggleClass('active');
    }
    else if (scrollPos >= codeLoc &&  scrollPos < designLoc) {
        $('.nav-link.projects').toggleClass('active');
    }
    else if (scrollPos >= designLoc) {
        $('.nav-link.design').toggleClass('active');
    }
}