$(function() {

    // Count clicks
    var clicks = 0;
    $('.catimage').click(function() {
        // Increment by one each click
        clicks++;
        // Remove old count and append new count to page
        $('.clicks__count').text('').append(clicks);
    });

})