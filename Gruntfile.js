module.exports = function(grunt) {

	grunt.initConfig({
		settings: {
			dir: {
				src: 'src',
				dist: 'dist'
			}
		},

		bowercopy: {
			options: {
				srcPrefix: 'bower_components'
			},
			scripts: {
				options: {
					destPrefix: '<%= settings.dir.src %>/js/vendor/'
				},
				files: {
					//destination : source
					'jquery.js': 'jquery/dist/jquery.js'
				}
			}
		},

        filerev: {

            files: {
                src: [
                    '<%= settings.dir.src %>/style/*.css'
                ]
            },

            options: {
                algorithm: 'sha1',
                length: 7
            }
        },

		jshint: {
			files: [
				'Gruntfile.js',
				'<%= settings.dir.src %>/js/*.js'
			],
		},

		compass: {
			dev: {
				options: {
					httpPath: '/',
					sassDir : '<%= settings.dir.src %>/style/sass',
					cssDir: '<%= settings.dir.src %>/style/',
					imagesDir: '<%= settings.dir.src %>/img',
					relativeAssets: true,
					require: ['susy']
				}
			}
		},

        watch: {
			all: {
				files: ['Gruntfile.js','<%= settings.dir.src %>/**/*'],
				options: {
					livereload: true
				}
			},
            scripts: {
				files: '<%= settings.dir.src %>/js/*.js',
				tasks: ['jshint'],
				options: {
					spawn: false,
				}
			},
			css: {
				files: ['<%= settings.dir.src %>/style/sass/**/*.scss'],
				tasks: ['compass:dev'],
				options: {
					spawn: false
				}
			},
        }
	});

	grunt.loadNpmTasks('grunt-filerev');
	grunt.loadNpmTasks('grunt-bowercopy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['build']);
	grunt.registerTask('build', [
		'compass:dev',
		'filerev'
	]);
};