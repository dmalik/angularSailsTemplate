module.exports = function (grunt) {
	grunt.registerTask('prod', [
		'compileAssets',
		'concat',
        'ngmin',
		'uglify',
		'cssmin',
        'rev',
        'htmlmin',
		'sails-linker:prodJs1',
        'sails-linker:prodJs2',
		'sails-linker:prodStyles',
		'sails-linker:devTpl'
	]);
};
