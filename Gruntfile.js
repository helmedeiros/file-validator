module.exports = function(grunt) {
  "use strict";
  
  grunt.initConfig({


    karma: {
      unit: {
        configFile: './test/karma.conf.js',
      }
    }
  });

  //plugins
  grunt.loadNpmTasks('grunt-karma');


  //single run tests
  grunt.registerTask('test', ['test:unit']);
  grunt.registerTask('test:unit', ['karma:unit']);

};
