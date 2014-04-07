/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {

	grunt.config.set('uglify', {
		dist: {
            files: [{
                expand: true,
                cwd: '.tmp/public/concat',
                src: '*.js',
                dest: '.tmp/public/min'
            }]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};
