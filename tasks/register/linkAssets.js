module.exports = function (grunt) {
	grunt.registerTask('linkAssets', [
		'sails-linker:devJs1',
        'sails-linker:devJs2',
        'sails-linker:devJs3',
		'sails-linker:devStyles',
		'sails-linker:devTpl'
	]);
};
