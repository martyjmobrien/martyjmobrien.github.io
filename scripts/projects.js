$(document).ready(function() {
    $('footer p, li:nth-child(-n+2), li:nth-child(4)').mouseenter(function() {
        $(this).fadeTo('fast', 1);
    })
    $('footer p, li:nth-child(-n+2), li:nth-child(4)').mouseleave(function() {
        $(this).fadeTo('slow', 0.5);
    })
});