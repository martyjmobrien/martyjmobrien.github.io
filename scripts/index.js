$(document).ready(function() {
    $('footer p, li').mouseenter(function() {
        $('footer p, li').fadeTo('fast', 1);
    })
    $('footer p, li').mouseleave(function() {
        $('footer p, li').fadeTo('slow', 0.5);
    });
});