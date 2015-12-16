$(function() {

    //Cat objects
    var model = {
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
        ],
        init: function() {
            for (i = 0; i < model.cats.length; i++) {
                // Set universal object properties
                model.cats[i].number = i;
                model.cats[i].display = 'none';
                model.cats[i].clicks = 0;
            }
        }
    };

    var octopus = {
        init: function() {
            model.init();
            viewList.init();
            viewCat.init();
        },

        getCats: function() {
            return model.cats;
        }
    };

    var viewList = {
        // Set up DOM with initial view
        init: function() {
            this.render();
        },

        render: function() {
            var cats = octopus.getCats();

            for (i = 0; i < cats.length; i++) {
                // Append list of cats to page
                $('#cat-selector').append('<p id="cat' + i + '"><a href="#">' + cats[i].name + '</a></p>');
            }

        }
    };

    var viewCat = {
        // Set up DOM with initial view
        init: function() {
            for (i = 0; i < model.cats.length; i++) {
                // Append main cat divs to page
                $('#cat-container').append('<div id="cat-main' + i + '" class="cat cat-main" style="display:' + model.cats[i].display + '"><img class="catimage" src="' + model.cats[i].image + '" alt="' + model.cats[i].alt + '"><div class="catname modal">' + model.cats[i].name + '</div></div>')

                // Set style to display none
                $('.cat-main').css('display', 'none');
            }
        },

        // Update cat viewing area
        changeMainCat: function() {
            for (i = 0; i < model.cats.length; i++) {
                $('#cat' + i).click((function(catCopy) {
                    return function() {
                        // Set property
                        catCopy.display = 'block';
                        // Apply property
                        $('#cat-main' + catCopy.number).css('display', catCopy.display);
                        $('#cat-main' + catCopy.number).siblings().css('display', 'none');
                        // Display this cat's clicks
                        $('.clicks__count').text('').append(catCopy.clicks)
                    }
                })(model.cats[i]));
            }
        },

        // Count clicks
        countClicks: function() {
            for (i = 0; i < model.cats.length; i++) {
                $('#cat-main' + i).click((function(catCopy) {
                    return function() {
                        // Increment by one each click
                        catCopy.clicks++;
                        // Remove old count and append new count to page
                        $('.clicks__count').text('').append(catCopy.clicks);
                    }
                })(model.cats[i]));
            }
        }
    };

    octopus.init();

})