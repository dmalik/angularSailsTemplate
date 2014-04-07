/**
 * Autoinsert script tags (or other filebased tags) in an html file.
 *
 * ---------------------------------------------------------------
 *
 * Automatically inject <script> tags for javascript files and <link> tags
 * for css files.  Also automatically links an output file containing precompiled
 * templates using a <script> tag.
 *
 * For usage docs see:
 * 		https://github.com/Zolmeister/grunt-sails-linker
 *
 */
module.exports = function(grunt) {

	grunt.config.set('sails-linker', {
		devJs1: {
			options: {
				startTag: '<!--VENDOR-->',
				endTag: '<!--VENDOR END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/**/*.html': require('../pipeline').vendor,
				'views/**/*.html': require('../pipeline').vendor,
				'views/**/*.ejs': require('../pipeline').vendor
			}
		},

        devJs2: {
            options: {
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: '.tmp/public'
            },
            files: {
                '.tmp/public/**/*.html': require('../pipeline').scripts,
                'views/**/*.html': require('../pipeline').scripts,
                'views/**/*.ejs': require('../pipeline').scripts
            }
        },

        devJs3: {
            options: {
                startTag: '<!--IE9-->',
                endTag: '<!--END IE9-->',
                fileTmpl: '<!--[if lt IE 9]><script src="%s"></script><![endif]-->',
                appRoot: '.tmp/public'
            },
            files: {
                '.tmp/public/**/*.html': require('../pipeline').scripts,
                'views/**/*.html': require('../pipeline').scripts,
                'views/**/*.ejs': require('../pipeline').scripts
            }
        },

		devJsRelative1: {
			options: {
				startTag: '<!--VENDOR-->',
				endTag: '<!--VENDOR END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'.tmp/public/**/*.html': require('../pipeline').vendor,
				'views/**/*.html': require('../pipeline').vendor,
				'views/**/*.ejs': require('../pipeline').vendor
			}
		},

        devJsRelative2: {
            options: {
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: '.tmp/public',
                relative: true
            },
            files: {
                '.tmp/public/**/*.html': require('../pipeline').scripts,
                'views/**/*.html': require('../pipeline').scripts,
                'views/**/*.ejs': require('../pipeline').scripts
            }
        },

        devJsRelative3: {
            options: {
                startTag: '<!--IE9-->',
                endTag: '<!--END IE9-->',
                fileTmpl: '<!--[if lt IE 9]><script src="%s"></script><![endif]-->',
                appRoot: '.tmp/public',
                relative: true
            },
            files: {
                '.tmp/public/**/*.html': require('../pipeline').scripts,
                'views/**/*.html': require('../pipeline').scripts,
                'views/**/*.ejs': require('../pipeline').scripts
            }
        },

		prodJs1: {
			options: {
				startTag: '<!--VENDOR-->',
				endTag: '<!--VENDOR END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/**/*.html': ['.tmp/public/min/*.vendor.js'],
				'views/**/*.html': ['.tmp/public/min/*.vendor.js'],
				'views/**/*.ejs': ['.tmp/public/min/*.vendor.js']
			}
		},

        prodJs2: {
            options: {
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: '.tmp/public'
            },
            files: {
                '.tmp/public/**/*.html': ['.tmp/public/min/*.scripts.js'],
                'views/**/*.html': ['.tmp/public/min/*.scripts.js'],
                'views/**/*.ejs': ['.tmp/public/min/*.scripts.js']
            }
        },

        prodJs3: {
            options: {
                startTag: '<!--IE9-->',
                endTag: '<!--END IE9-->',
                fileTmpl: '<!--[if lt IE 9]><script src="%s"></script><![endif]-->',
                appRoot: '.tmp/public'
            },
            files: {
                '.tmp/public/**/*.html': ['.tmp/public/min/*.ie9.js'],
                'views/**/*.html': ['.tmp/public/min/*.ie9.js'],
                'views/**/*.ejs': ['.tmp/public/min/*.ie9.js']
            }
        },

		prodJsRelative1: {
			options: {
				startTag: '<!--VENDOR-->',
				endTag: '<!--VENDOR END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'.tmp/public/**/*.html': ['.tmp/public/min/*.vendor.js'],
				'views/**/*.html': ['.tmp/public/min/*.vendor.js'],
				'views/**/*.ejs': ['.tmp/public/min/*.vendor.js']
			}
		},

        prodJsRelative2: {
            options: {
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: '.tmp/public',
                relative: true
            },
            files: {
                '.tmp/public/**/*.html': ['.tmp/public/min/*.scripts.js'],
                'views/**/*.html': ['.tmp/public/min/*.scripts.js'],
                'views/**/*.ejs': ['.tmp/public/min/*.scripts.js']
            }
        },

        prodJsRelative3: {
            options: {
                startTag: '<!--IE9-->',
                endTag: '<!--END IE9-->',
                fileTmpl: '<!--[if lt IE 9]><script src="%s"></script><![endif]-->',
                appRoot: '.tmp/public',
                relative: true
            },
            files: {
                '.tmp/public/**/*.html': ['.tmp/public/min/*.ie9.js'],
                'views/**/*.html': ['.tmp/public/min/*.ie9.js'],
                'views/**/*.ejs': ['.tmp/public/min/*.ie9.js']
            }
        },

		devStyles: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},

			files: {
				'.tmp/public/**/*.html': require('../pipeline').cssFilesToInject,
				'views/**/*.html': require('../pipeline').cssFilesToInject,
				'views/**/*.ejs': require('../pipeline').cssFilesToInject
			}
		},

		devStylesRelative: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},

			files: {
				'.tmp/public/**/*.html': require('../pipeline').cssFilesToInject,
				'views/**/*.html': require('../pipeline').cssFilesToInject,
				'views/**/*.ejs': require('../pipeline').cssFilesToInject
			}
		},

		prodStyles: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/index.html': ['.tmp/public/min/*.css'],
				'views/**/*.html': ['.tmp/public/min/*.css'],
				'views/**/*.ejs': ['.tmp/public/min/*.css']
			}
		},

		prodStylesRelative: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'.tmp/public/index.html': ['.tmp/public/min/*.css'],
				'views/**/*.html': ['.tmp/public/min/*.css'],
				'views/**/*.ejs': ['.tmp/public/min/*.css']
			}
		},

		// Bring in JST template object
		devTpl: {
			options: {
				startTag: '<!--TEMPLATES-->',
				endTag: '<!--TEMPLATES END-->',
				fileTmpl: '<script type="text/javascript" src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/index.html': ['.tmp/public/jst.js'],
				'views/**/*.html': ['.tmp/public/jst.js'],
				'views/**/*.ejs': ['.tmp/public/jst.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-sails-linker');
};
