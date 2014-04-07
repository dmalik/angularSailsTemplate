/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */



// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
    'styles/**/*.css'
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var vendor = [
    'bower_components/angular/angular.js',
    'bower_components/angular-resource/angular-resource.js',
    'bower_components/angular-cookies/angular-cookies.js',
    'bower_components/angular-sanitize/angular-sanitize.js',
    'bower_components/angular-route/angular-route.js',
    'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
    'sails_deps/socket.io.js',
    'sails_deps/angularSails.js'
];

var scripts = [

    // linked in the proper order

    // All of the rest of your app scripts
    'scripts/app.js',
    'scripts/controllers/**/*.js',
    'scripts/directives/**/*.js',
    'scripts/filters/**/*.js',
    'scripts/services/**/.js'
];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
    'templates/**/*.html'
];


// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function (path) {
    return '.tmp/public/' + path;
});
module.exports.vendor = vendor.map(function (path) {
    return '.tmp/public/' + path;
});
module.exports.scripts = scripts.map(function (path) {
    return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function (path) {
    return 'assets/' + path;
});
