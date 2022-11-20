'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglifycss = require('gulp-uglifycss');

gulp.task('sass', function () {
  return gulp.src('./styles/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./styles/css/'));
});

gulp.task('run', gulp.series('sass'));

gulp.task('watch', function () {
  gulp.watch('./styles/sass/*.scss', gulp.series('sass'));
});
gulp.task('default', gulp.series('run', 'watch'));