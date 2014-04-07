module.exports = function (grunt) {
    grunt.registerTask('test', [
        'compileAssets',
        'linkAssets',
        'autoprefixer',
        'connect:test',
        'karma'
    ]);
};
