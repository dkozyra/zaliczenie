module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            bundle: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js'
                ],
                dest: 'web/assets/main.js'
            }
        },
        md2html: {
            one_file: {
                options: {},
                files: [{
                    src: ['web/*.md'],
                    dest: 'web/assets/mdcontent.html'
                }]
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-md2html');
    grunt.registerTask('default', ['concat', 'md2html']);
};