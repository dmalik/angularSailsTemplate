module.exports = function (grunt) {

    grunt.config.set('rev', {
        options: {
            encoding: 'utf8',
            algorithm: 'md5',
            length: 8
        },
        dist: {
            files: {
                src: [
                    '.tmp/public/min/{,*/}*.js',
                    '.tmp/public/min/{,*/}*.css'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-rev');
};