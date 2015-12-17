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
            this.render();
        },

        render: function() {
            var cats = octopus.getCats();
            var img = document.getElementById('catimage');
            var catName = document.getElementById('catname');

            for (i = 0; i < cats.length; i++) {
                $('#cat' + i).click((function(catCopy) {
                    return function() {
                        // Render cat area
                        img.src = catCopy.image;
                        img.alt = catCopy.image;
                        $('#catname').text(catCopy.name);

                        // Render click area
                        $('.clicks__count').text(catCopy.clicks);
                    }

                })(cats[i]));
            }

            for (i = 0; i < cats.length; i++) {
                $('#cat-container').click((function(catCopy) {
                    return function() {
                        // Increment by one each click
                        catCopy.clicks++;

                        // Remove old count and append new count to page
                        $('.clicks__count').text(catCopy.clicks);
                    }
                })(cats[i]));
            }
        }

    };

    octopus.init();

})