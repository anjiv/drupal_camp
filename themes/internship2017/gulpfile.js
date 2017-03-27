var gulp = require('gulp');
var scss = require('gulp-sass');
var compass = require('gulp-compass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');


gulp.task('scss', function(){
 return gulp.src('scss/**/*.scss')
   .pipe(scss())
   .pipe(gulp.dest('css'))
   .pipe(browserSync.reload({
     stream: true
   }))
});

gulp.task('compass', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'css',
      sass: 'scss'
    }))
    .pipe(gulp.dest('css'));
});



gulp.task('browserSync', function() {
 var files = [
   'css/*',
   'scss/*',
   'index.php'
 ]


 browserSync.init(files, {
   proxy: "http://internship.2017/"
 })
});


gulp.task('watch', ['browserSync','compass'], function (){
 gulp.watch('scss/**/*.scss', ['compass']);
 // Other watchers
});



gulp.task('images', function(){
 return gulp.src('images/**/*.+(png|jpg|gif|svg)')
 .pipe(imagemin())
 .pipe(gulp.dest('images'))
});
