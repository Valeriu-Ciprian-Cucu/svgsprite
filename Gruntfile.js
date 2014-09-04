module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			options: {
				config: 'config.rb'
			},
			build: {}
		},
		svgsprite: {
			options: {
				padding: 10,
				spritedir: '', //folder name relative to 'dest' from build task
				sprite: 'bundle', //name of the file, do not place extension here
				prefix: 'icon',
				render: {
					css: false,
					compass: {
						template: 'src/svgsprite.mst', //path directly to template file
						dest: '../scss/_map.scss' //this path is relative to the paths from build task below
					}
				}
			},
			build: {
				src: 'src/svgpieces', //path directly to specific folder
				dest: 'src/svgbundle' //path directly to specific folder
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-svg-sprite');

	grunt.registerTask('build', ['svgsprite', 'compass']);
}
