$(function() {

    //Cat objects
    var model = {
        currentCat: null,
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
            viewAdmin.init();
        },

        getCats: function() {
            return model.cats;
        },

        getCurrentCat: function() {
            return model.currentCat;
        },

        setCurrentCat: function(currentCat) {
            model.currentCat = currentCat;
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

        },

        update: function(currentCat) {
            var cats = octopus.getCats();

            $('#cat' + currentCat + ' a').html(cats[currentCat].name);
        }
    };

    var viewCat = {
        // Set up DOM with initial view
        init: function() {
            // Start with cat container hidden
            $('.cat-container').hide();

            this.render();
        },

        render: function() {
            var cats = octopus.getCats();
            var currentCat = octopus.getCurrentCat();

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

                        // Render click area
                        $('.clicks__count').text(catCopy.clicks);

                        // Mark visible cat as the new currentCat
                        currentCat = catCopy.number;

                        // Update model with new currentCat
                        octopus.setCurrentCat(currentCat);
                    }
                })(cats[i]));
            }

            // Render the admin when any of the cats are clicked
            $('#cat-selector p').click(function() {
                viewAdmin.render();
            });

            // Count clicks
            $('.cat-container').click(function() {
                // Increment by one each click
                cats[currentCat].clicks++;

                // Remove old count and append new count to page
                $('.clicks__count').text(cats[currentCat].clicks);

                // Update value in admin area
                $('#admin-clicks').val(cats[currentCat].clicks);
            });

        },

        update: function(currentCat) {
            var cats = octopus.getCats();

            // Update clicks
            $('.clicks__count').text(cats[currentCat].clicks);

            // Update cat name in main cat area
            $('#catname').html(cats[currentCat].name);
        }

    };

    var viewAdmin = {
        init: function() {
            // Start with admin area hidden
            $('#admin').hide();

            // Show the admin area when button clicked
            $('#admin-button').click(function() {
                $('#admin').show();

                viewAdmin.render();
            });
        },

        render: function() {
            var cats = octopus.getCats();
            var currentCat = octopus.getCurrentCat();

            // Set input values
            $('#admin-name').val(cats[currentCat].name);
            $('#admin-clicks').val(cats[currentCat].clicks);

            $('#submit').click(function() {
                cats[currentCat].name = $('#admin-name').val();
                cats[currentCat].clicks = $('#admin-clicks').val();

                // Update the counted clicks
                //$('.clicks__count').text(cats[currentCat].clicks);
                viewCat.update(currentCat);

                // Reset the list of cats
                viewList.update(currentCat);

                // Re-hide the admin area
                $('#admin').hide();
            });

            // Hide the admin area if cancelled
            $('#cancel').click(function() {
                $('#admin').hide();
            });
        }
    };

    octopus.init();

})