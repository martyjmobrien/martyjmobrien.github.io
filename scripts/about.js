$(document).ready(function() {
    $('footer p, li:nth-child(1), li:nth-child(n+3)').mouseenter(function() {
        $(this).fadeTo('fast', 1);
    })
    $('footer p, li:nth-child(1), li:nth-child(n+3)').mouseleave(function() {
        $(this).fadeTo('slow', 0.5);
    })
});