module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        assemble: {
            options: {
                layout: "default.hbs",
                layoutdir: 'src/layouts',
                data: 'src/data/*.json',
                flatten: true
            },
            index: {
                options: {
                    layout: "core.hbs"
                },
                files: {
                    '.': ['src/index.hbs']
                }
            },
            pages: {
                files: {
                    '.': ['src/pages/*.hbs']
                }
            },

        }
    });
    grunt.loadNpmTasks('assemble');
    grunt.registerTask('default', ['assemble']);
};
