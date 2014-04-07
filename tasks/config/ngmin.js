module.exports = function (grunt) {

    grunt.config.set('ngmin', {
        dist: {
            src: ['.tmp/public/concat/scripts.css'],
            dest: '.tmp/public/concat/scripts.css'
        }
    });

    grunt.loadNpmTasks('grunt-ngmin');
};