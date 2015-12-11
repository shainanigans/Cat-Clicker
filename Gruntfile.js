module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      autoprefixer:{
        dist:{
          files:{
            'development/css/main.css':'production/css/main.css'
          }
        }
      },
      responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: "small",
            width: 100,
            quality: 80
          },{
            name: "medium",
            width: 320,
            quality: 80
          },{
            name: "large",
            width: 720,
            quality: 80
          }]
        },

        /* Where to get and put images */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'development/img',
          dest: 'production/img'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['production/img'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['production/img']
        },
      },
    },
    uglify: {
        development: {
            files: {
                /* Minify in development folder */
                'development/js/main.min.js': 'development/js/main.js'
            }
        },
        production: {
            files: {
                /* Minify in production folder */
                'production/js/main.min.js': 'development/js/main.js'
            }
        }
    }
    });
    /* CSS Tasks */
    grunt.loadNpmTasks('grunt-autoprefixer');
    /* Image Tasks */
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mkdir');
    /* JS Tasks */
    grunt.loadNpmTasks('grunt-contrib-uglify');
    /* Default Task */
    grunt.registerTask('default', ['autoprefixer', 'clean', 'mkdir', 'responsive_images']);
}