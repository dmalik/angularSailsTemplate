module.exports = function (grunt) {

    grunt.config.set('htmlmin', {
        dist: {
            options: {
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeCommentsFromCDATA: true,
                removeOptionalTags: true,
                removeComments: true
            },
            files: [{
                expand: true,
                cwd: '.tmp/public',
                src: ['*.html', 'views/{,*/}*.html'],
                dest: '.tmp/public'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
};