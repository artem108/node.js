Module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    grunt.initConfig({
concat: {
  options: {
    separator: ';',
  },
  dist: {
    src: ['js/script1.js', 'js/script2.js'],
    dest: 'js/script.main.js',
  },
},
});

  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['concat']);
};
