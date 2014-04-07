module.exports = function (grunt) {
	grunt.registerTask('build', [
		'compileAssets',
        'concat',
        'ngmin',
        'uglify',
        'cssmin',
        'rev',
        'htmlmin',
		'linkAssetsBuildProd',
		'clean:build',
		'copy:build'
	]);
};
