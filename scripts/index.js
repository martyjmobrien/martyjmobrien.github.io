$(document).ready(function() {
    $('footer p, li').mouseenter(function() {
        $(this).fadeTo('fast', 1);
    })
    $('footer p, li').mouseleave(function() {
        $(this).fadeTo('slow', 0.5);
    })
});