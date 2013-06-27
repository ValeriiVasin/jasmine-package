module.exports = function (grunt) {
    grunt.initConfig({
        filename: 'jasmine-package',

        files: {
            css: 'components/jasmine/lib/jasmine-core/jasmine.css',
            core: 'components/jasmine/lib/jasmine-core/jasmine.js',
            reporter: 'components/jasmine/lib/jasmine-core/jasmine-html.js',

            output: 'build/jasmine-package.js'
        },

        uglify: {
            min: {
                options: {
                    mangle: false
                },
                files: {
                    'build/jasmine-package.min.js': 'build/jasmine-package.js'
                }
            }
        },

        watch: {
            build: {
                files: 'jasmine-package.tmpl',
                tasks: ['build']
            }
        }
    });

    grunt.registerTask('build', function () {
        var tmpl = grunt.file.read('jasmine-package.tmpl'),
            data = {};

        data.core = grunt.file.read( grunt.config('files.core') );
        data.reporter = grunt.file.read( grunt.config('files.reporter') );
        data.css = grunt.file.read( grunt.config('files.css') );

        data.css = data.css
            .replace(/\n+/g, '')
            .replace(/\\/g, '\\\\')
            .replace(/('|")/g, '\\$1');

        grunt.file.write(
            grunt.config('files.output'),
            grunt.template.process(tmpl, { data: data })
        );

        grunt.task.run('uglify');
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
