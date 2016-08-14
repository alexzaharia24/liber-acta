module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    wiredep: {
	  	task: { 
	    	// Point to the files that should be updated when 
		    // you run `grunt wiredep` 
		    src: [
		      '../index.html'         // and .yml & .yaml support out of the box! 
		    ],
		    
		    options: {
		      // See wiredep's configuration documentation for the options 
		      // you may pass: 
		 
		      // https://github.com/taptapship/wiredep#configuration 
		    }
	  	}
	},
	injector: {
	    options: {
	      // Task-specific options go here.
	    },
	    styles: {
	      	files: {
	      		'../index.html':['../spa/assets/**/*.css']
	      	}
	    }		
	}
  });

  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-injector');

  grunt.registerTask('default', ['wiredep', 'injector']);

};