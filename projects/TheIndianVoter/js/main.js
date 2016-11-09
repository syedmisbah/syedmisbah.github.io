$(document).ready(function() {



});

time = new Date().getTime();
$(window).scroll(function(e) {
    var newtime = new Date().getTime();
    var s = $(window).scrollTop();
    if (newtime - time > 50 && s < 700) {
        var opacityVal = (s / 100.0);
        $('.cover-norm').css('opacity', opacityVal);
        $('.cover-blur').css('opacity', 0.9 - Math.min(opacityVal/2, 0.4));
        time = newtime;
    }
});

$(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
