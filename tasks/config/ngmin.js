module.exports = function (grunt) {

    grunt.config.set('ngmin', {
        dist: {
            src: ['.tmp/public/concat/scripts.js'],
            dest: '.tmp/public/concat/scripts.js'
        }
    });

    grunt.loadNpmTasks('grunt-ngmin');
};