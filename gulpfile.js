'use strict';
/**
 * Project Setup
 *
 * Setting up variables for project name and directories
*/

var url        = 'localhost:8888/YOUR_FOLDER_NAME';
var source     = 'assets/';

var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync').create();
var concat       = require('gulp-concat');
var filter       = require('gulp-filter');
var gulp         = require('gulp');
var jshint       = require('gulp-jshint');
var minifycss    = require('gulp-uglifycss');
var plumber      = require('gulp-plumber');
var reload       = browserSync.reload;
var rename       = require('gulp-rename');
var replace      = require('gulp-replace');
var runSequence  = require('gulp-run-sequence');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var babel        = require('gulp-babel');
var uglify       = require('gulp-uglify');
var replace      = require('gulp-replace');
var webpack = require('webpack-stream');

gulp.task('browser-sync', function() {
  var files = [
    '**/*.php',
    '**/*.{png,jpg,gif}',
  ];
  browserSync.init(files, {
    proxy: url,
  });
});

gulp.task('styles', function() {
  return gulp.src([source + 'sass/**/*.scss'])
    .pipe(plumber({
      errorHandler: function(err) {
        console.log(err);
        this.emit('end');
      },
    }))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(
      'last 2 version',
      'safari 5', 'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ))
    .pipe(sourcemaps.write('../maps'))
    .pipe(plumber.stop())
    .pipe(replace('@charset "UTF-8";', '')) // Removes UTF-8 Encoding string atop CSS files
    .pipe(gulp.dest(source + 'css'))
    .pipe(filter('**/*.css')) // Filtering stream to only css files
    .pipe(reload({stream:true})) // Inject Styles when style file is created
    .pipe(rename({ suffix: '-min' }))
    .pipe(minifycss({
      maxLineLen: 80,
    }))
    .pipe(gulp.dest(source + 'css'))
    .pipe(reload({stream:true})) // Inject Styles when min style file is created
});

gulp.task("cache-bust-css", function() {
  var dateString = new Date().getTime();
  return gulp
    .src(["header.php"])
    .pipe(
      replace(/style-min\.css\?v=\d+/g, function() {
        return 'style-min.css?v=' + dateString;
      })
    )
    .pipe(gulp.dest("."));
});

gulp.task('js', function() {
  return gulp.src([source + 'js/app/*.js'])
    .pipe(webpack({
      mode: 'production'
    }))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('development.js'))
    .pipe(gulp.dest(source + 'js'))
    .pipe(rename({
      basename: 'production',
      suffix: '-min',
    }))
    .pipe(uglify())
    .pipe(gulp.dest(source + 'js/'))
});

gulp.task('jsHint', function() {
  return gulp.src([source + 'js/app/**/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
});

gulp.task('build', function(cb) {
  runSequence('styles', 'js', cb);
});

gulp.task('default', ['styles', 'cache-bust-css', 'js', 'jsHint', 'browser-sync'], function() {
  gulp.watch(source + 'sass/**/*.scss', ['styles', 'cache-bust-css']);
  gulp.watch(source + 'js/app/**/*.js', ['js', browserSync.reload]);
  gulp.watch(source + 'js/app/**/*.js', ['jsHint']);
});
