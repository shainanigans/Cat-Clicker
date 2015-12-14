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

    // Append and make cats clickable
    for (i = 0; i < cats.cats.length; i++) {
        // Variables for functions
        var cat = cats.cats[i];

        // Append cats to page
        $('#cat-selector').append('<div class="cat flex-item" id="cat' + i + '"><img src="' + cat.image + '" alt="' + cat.alt + '"><div class="catname modal">' + cat.name + '</div></div>');

        // Add cats to main cat div when clicked
        $('#cat' + i).click((function(catCopy) {
            // Closure
            return function() {
                // Remove a cat if there's already one
                if ($('.cat-main')) {
                    $('.cat-main').detach();
                }

                // Add the new cat
                $('#cat-container').append('<div class="cat cat-main"><img class="catimage" src="' + catCopy.image + '" alt="' + catCopy.alt + '"><div class="catname modal">' + catCopy.name + '</div></div>');
            }
        })(cat));
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