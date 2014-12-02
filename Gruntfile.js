'use strict';
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true
      },
      src: ['models/**/*.js', 'server.js', 'routes/**/*.js', 'Gruntfile.js', 'app/js/**/*.js']
    },

    simplemocha: {
      src: ['test/api/**/*.js']
    },

    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        expand: true,
        src: ['**/*.html'],
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'build/client_bundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    },

    jscs: {
      src: ['models/**/*.js', 'server.js', 'routes/**/*.js', 'Gruntfile.js', 'app/js/**/*.js'],
      options: {
        config: '.jscsrc'
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'simplemocha']);
  grunt.registerTask('build', ['jshint', 'jscs', 'clean:dev', 'browserify:dev', 'copy:dev']);
};
