module.exports = function (grunt) {
	grunt.registerTask('build', [
		'compileAssets',
        'concat',
        'ngmin',
        'uglify',
        'cssmin',
        'rev',
		'linkAssetsBuildProd',
        'htmlmin',
		'clean:build',
		'copy:build'
	]);
};
