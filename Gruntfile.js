'use strict';
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'
// templateFramework: 'lodash'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'static'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: ['.tmp', '<%= yeoman.dist %>/*'],
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/*.js'
            ]
        },
        coffeelint: {
            options: {
            },
            app: ['<%= yeoman.app %>/scripts/**/*.coffee']
        },
        less: {
            development: {
                options: {
                 // paths: ["assets/css"]
                },
                files: {
                    '<%= yeoman.dist %>/styles/main.css': '<%= yeoman.app %>/styles/bootstrap.less'
                }
            }
        },
        coffee: {
            dist: {
                files: [{
                    // rather than compiling multiple files here you should
                    // require them into your main .coffee file
                    expand: true,
                    cwd: '<%= yeoman.app %>/scripts',
                    src: '**/*.coffee',
                    dest: '<%= yeoman.app %>/scripts',
                    ext: '.js'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: '.tmp/spec',
                    src: '*.coffee',
                    dest: 'test/spec'
                }]
            }
        },
        requirejs: {
            compile: {
                // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
                    // `name` and `out` is set by grunt-usemin
                    name: 'main',
                    baseUrl: '<%= yeoman.app %>/js',
                    out: '<%= yeoman.dist %>/js/main.js',
                    mainConfigFile: '<%= yeoman.app %>/js/main.js',

                    //baseUrl: '<%= yeoman.app %>/scripts',
                    optimize: 'none',
                    //paths: {
                    //    'templates': '../../.tmp/scripts/templates'
                    //},
                    // TODO: Figure out how to make sourcemaps work with grunt-usemin
                    // https://github.com/yeoman/grunt-usemin/issues/30
                    //generateSourceMaps: true,
                    // required to support SourceMaps
                    // http://requirejs.org/docs/errors.html#sourcemapcomments
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true
                    //uglify2: {} // https://github.com/mishoo/UglifyJS2
                }
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        'fonts/*',
                        'images/*'
                    ]
                },
                {expand: true, flatten: true, src: ['<%= yeoman.app %>/bower_components/requirejs/require.js'], dest: '<%= yeoman.dist %>/js/vendor/', filter: 'isFile'},
                {expand: true, flatten: true, src: ['<%= yeoman.app %>/bower_components/modernizr/modernizr.js'], dest: '<%= yeoman.dist %>/js/vendor/', filter: 'isFile'}
                ]
            },
            requirejs: {
                files: [
                    {expand: true, flatten: true, src: ['<%= yeoman.app %>/bower_components/requirejs/require.js'], dest: '<%= yeoman.dist %>/js/vendor/', filter: 'isFile'} // includes files in path
                ]
            },
            bootstrap: {
                files: [
                    {expand: true, flatten: true, src: ['<%= yeoman.app %>/bower_components/bootstrap/less/*'], dest: '<%= yeoman.app %>/styles/bootstrap/', filter: 'isFile'} // includes files in path
                ]
            },
            fontawesome: {
                files: [
                    {expand: true, flatten: true, src: ['<%= yeoman.app %>/bower_components/font-awesome/less/*'], dest: '<%= yeoman.app %>/styles/fontawesome/', filter: 'isFile'}, // includes files in path
                    {expand: true, flatten: true, src: ['<%= yeoman.app %>/bower_components/font-awesome/font/*'], dest: '<%= yeoman.app %>/styles/font/', filter: 'isFile'} // includes files in path
                ]
            }
        },
        bower: {
            all: {
                rjsConfig: '<%= yeoman.app %>/scripts/main.js'
            }
        }
    });

    grunt.registerTask('test', [
        'coffee',
        'less'
    ]);

    grunt.registerTask('update', [
        'copy:bootstrap',
        'copy:fontawesome'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'coffee',
        'less',
        'requirejs',
        'copy:dist'
    ]);
};
