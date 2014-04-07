module.exports = function (grunt) {
	grunt.registerTask('linkAssetsBuildProd', [
		'sails-linker:prodJsRelative1',
        'sails-linker:prodJsRelative2',
		'sails-linker:prodStylesRelative',
		'sails-linker:devTpl'
	]);
};
