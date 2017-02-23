$(document).ready(function() {
    $('nav').animate({top: '+=40px'}, 1000);
    $('footer').animate({top: '-=40px'}, 1000);
    $('iframe').fadeTo(1000, 1);
    $('#title').fadeTo(1000, 1);
    $('footer p, li').hover(
        function() {
            $(this).fadeTo('fast', 1)
        },
        function() {
            $(this).fadeTo('fast', 0.5);
        }
    );
});