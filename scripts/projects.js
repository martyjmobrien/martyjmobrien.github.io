$(document).ready(function() {
    $('footer p, li:nth-child(-n+2), li:nth-child(4)').hover(
        function() {
            $(this).fadeTo('fast', 1)
        },
        function() {
            $(this).fadeTo('fast', 0.5);
        }
    );
})