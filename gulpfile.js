'use strict';

let gulp = require('gulp');
let server = require('gulp-express');
let runSequence = require('run-sequence');
let mocha = require('gulp-mocha');

gulp.task('build', function () {
	return server.run(['server.js']);
});

gulp.task('test', ['build'], function () {
	setTimeout(function () {
		gulp.src(['test/**/*.js'])
	    .pipe(mocha({
	        reporter: 'spec'
	    }));
	}, 5000);
});

gulp.task('default', ['build']);