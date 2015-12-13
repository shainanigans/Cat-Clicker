$(function() {

    //Cat objects
    var cats = {
        'cats': [
            {
                'image' : 'img/cat-on-amp.jpg',
                'alt' : 'An adorable tabby kitty on an amp',
                'name' : 'Ampelina'
            },
            {
                'image' : 'img/cat-on-floor.jpg',
                'alt' : 'A cute orange kitty on the floor',
                'name' : 'Floora'
            }
        ]
    }
    console.log(cats.cats.length);

    //Append cats to page
    for (i = 0; i < cats.cats.length; i++) {
        $('#cat-container').append('<div class="cat flex-item--1-2"><img class="catimage" src="' + cats.cats[i].image + '" alt="' + cats.cats[i].alt + '"><div class="catname modal">' + cats.cats[i].name + '</div></div>');
    }

    // Count clicks
    var clicks = 0;
    $('.catimage').click(function() {
        // Increment by one each click
        clicks++;
        // Remove old count and append new count to page
        $('.clicks__count').text('').append(clicks);
    });

})