module.exports = function(grunt) {

    grunt.config.set('karma', {
        unit: {
            configFile: 'karma.conf.js',
            singleRun: true
        }
    });

    grunt.loadNpmTasks('grunt-karma');
};
