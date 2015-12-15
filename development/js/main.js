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
        // Set universal object properties
        cat.number = i;
        cat.display = 'none';
        cat.clicks = 0;

        // Append list of cats to page
        $('#cat-selector').append('<p id="cat' + i + '"><a href="#">' + cat.name + '</p></a>');

        // Append main cat divs to page
        $('#cat-container').append('<div id="cat-main' + i + '" class="cat cat-main" style="display:' + cat.display + '"><img class="catimage" src="' + cat.image + '" alt="' + cat.alt + '"><div class="catname modal">' + cat.name + '</div></div>')
        // Set style to display none
        $('.cat-main').css('display', 'none');

        // Show selected cat
        $('#cat' + i).click((function(catCopy) {
            // Closure
            return function() {
                // Set property
                catCopy.display = 'block';

                // Apply property
                $('#cat-main' + catCopy.number).css('display', catCopy.display);
                $('#cat-main' + catCopy.number).siblings().css('display', 'none');

                // Display this cat's clicks
                $('.clicks__count').text('').append(catCopy.clicks)
            }
        })(cat));

        // Count clicks
        $('#cat-main' + i).click((function(catCopy) {
            // Closure
            return function() {
                // Increment by one each click
                catCopy.clicks++;
                // Remove old count and append new count to page
                $('.clicks__count').text('').append(catCopy.clicks);
            }
        })(cat));

    }

})