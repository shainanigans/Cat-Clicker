$(function() {

    //Cat objects
    var model = {
        currentCat: 0,
        cats: [
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
        },

        getCurrentCat: function() {
            return model.currentCat;
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
            this.render();
        },

        render: function() {
            var cats = octopus.getCats();
            var currentCat = octopus.getCurrentCat();

            $('.cat-container').hide();

            // Add current cat info to page
            for (i = 0; i < cats.length; i++) {
                $('#cat' + i).click((function(catCopy) {
                    return function() {
                        // Render cat area
                        $('.cat-container').show();
                        $('#catimage').attr({
                            src: catCopy.image,
                            alt: catCopy.alt
                        });
                        $('#catname').text(catCopy.name);

                        // Mark which cat is active for click counting
                        $('.cat-container').attr('id', 'maincat' + catCopy.number);

                        // Render click area
                        $('.clicks__count').text(catCopy.clicks);

                        // Mark visible cat as the new currentCat
                        currentCat = catCopy.number;
                    }
                })(cats[i]));
            }

            // Count clicks
            $('.cat-container').click(function() {
                // Increment by one each click
                cats[currentCat].clicks++;

                // Remove old count and append new count to page
                $('.clicks__count').text(cats[currentCat].clicks);
            });
        }

    };

    octopus.init();

})