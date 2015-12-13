$(function() {

    //Cat objects
    var cats = {
        'cats': [
            {
                'image' : 'img/cat-on-amp.jpg',
                'alt' : 'An adorable tabby kitty on an amp',
                'name' : 'Ampersand'
            },
            {
                'image' : 'img/cat-on-floor.jpg',
                'alt' : 'A cute orange kitty on the floor',
                'name' : 'Floora'
            },
            {
                'image' : 'img/cat-on-wood.jpg',
                'alt' : 'A fluffy tabby lying on weathered woodboards',
                'name' : 'Aslan'
            },
            {
                'image' : 'img/cat-on-chair.jpg',
                'alt' : 'A fluffy Siamese kitty on a wooden chair',
                'name' : 'Queen Fluffipants'
            },
            {
                'image' : 'img/cat-behind-window.jpg',
                'alt' : 'A sneaky grey and white kitty behind a window shade',
                'name' : 'Le Sneeque'
            }
        ]
    }

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