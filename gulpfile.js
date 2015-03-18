var gulp = require('gulp');
var connect = require('gulp-connect');
var traceur = require('gulp-traceur');
var sass = require('gulp-sass');

gulp.task('connect', function(){
  connect.server({
    livereload: true,
    port: 8008
  });
});

gulp.task('reload', function(){
  gulp.src('./dist/**/*.*')
  .pipe(connect.reload());
});

gulp.task('sass', function(){
  gulp.src('./sass/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('dist/css'));
});

gulp.task('traceur', function(){
  gulp.src('./scripts/*.js')
  .pipe(traceur())
  .pipe(gulp.dest('dist/scripts'));
});

gulp.task('watch', function(){
  gulp.watch(['./sass/*.scss'], ['sass']);
  gulp.watch(['./scripts/*.js'], ['traceur']);
  gulp.watch(['./dist/**/*.*'], ['reload']);
});

gulp.task('default', ['connect', 'sass', 'traceur', 'watch']);