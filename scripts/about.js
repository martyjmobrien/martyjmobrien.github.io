$(document).ready(function() {
    $('footer p, li:nth-child(1), li:nth-child(n+3)').hover(
        function() {
            $(this).fadeTo('fast', 1)
        },
        function() {
            $(this).fadeTo('fast', 0.5);
        }
    );
})