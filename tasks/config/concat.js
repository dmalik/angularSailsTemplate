/**
 * Concatenate files.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * .tmp/public/contact directory
 * [concat](https://github.com/gruntjs/grunt-contrib-concat)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function(grunt) {

	grunt.config.set('concat', {
		js1: {
			src: require('../pipeline').vendor,
			dest: '.tmp/public/concat/vendor.js'
		},
        js2: {
            src: require('../pipeline').scripts,
            dest: '.tmp/public/concat/scripts.js'
        },
        js3: {
            src: require('../pipeline').scripts,
            dest: '.tmp/public/concat/ie9.js'
        },
		css: {
			src: require('../pipeline').cssFilesToInject,
			dest: '.tmp/public/concat/styles.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
};
