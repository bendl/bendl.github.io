/**
 * Created by Ben on 26/04/2016.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-pug');

gulp.task('default', function(){
    gulp.watch('./src/views/**/*', ['views']);
    gulp.watch('./src/styles/**/*', ['styles']);
});

gulp.task('views', function(){
    gulp.src('./src/views/**/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('styles', function(){
    gulp.src('./src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles'));
});