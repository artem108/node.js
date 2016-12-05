require('grunt-contrib-concat')(grunt);

module.exports = function(grunt) {


grunt.initConfig({
concat: {
options: {
separator: ';'
},
dist: {
src: ['js/*.js'],
dest: 'js/script.main.js'
}
},
uglify: {
dist: {
src: ['js/script.main.js'],
dest: 'js/script.main.min.js'
}
},
cssmin: {
options: {
shorthandCompacting: false,
roundingPrecision: -1
},
target: {
files: {
'css/dist/style.min.css': ['css/src/.css']
}
}
}
});

grunt.loadNpmTasks('grunt-contrib-concat');

grunt.registerTask('default', ['concat']);

};
