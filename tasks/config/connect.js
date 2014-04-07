module.exports = function(grunt) {

    grunt.config.set('connect', {
        options: {
            port: 9000,
            // Change this to '0.0.0.0' to access the server from outside.
            hostname: 'localhost',
            livereload: 35729
        },
        livereload: {
            options: {
                open: true,
                base: [
                    '.tmp',
                    '.tmp/public'
                ]
            }
        },
        test: {
            options: {
                port: 9001,
                base: [
                    '.tmp',
                    'test',
                    '.tmp/public'
                ]
            }
        },
        dist: {
            options: {
                base: '.tmp/public'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};
