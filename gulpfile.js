'use strict';

var gulp = require('gulp');
var exec = require('child_process').exec;
var browserify = require('gulp-browserify');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var templateCache = require('gulp-angular-templatecache');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src(['./bower_components/bootstrap/scss/bootstrap.scss', 'lib/front/css/main.scss'])
    .pipe(sass({
      // outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('templates', function () {
  return gulp.src('lib/front/**/*.html')
    .pipe(templateCache({
      standalone: true,
      moduleSystem: 'Browserify'
    }))
    .pipe(gulp.dest('lib/front/main'));
});

// Basic usage
gulp.task('scripts', function () {
  // Single entry point to browserify
  gulp.src('lib/front/main/app.module.js')
    .pipe(browserify({
      debug: true
    }))
    .on('error', swallowError)
    .pipe(gulp.dest('public/build/js'));
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('lib/front/**/*.js', ['scripts']);
  gulp.watch(['lib/back/**/*.js', 'views/**/*.jade', 'public/js/**/*.html', 'public/**/*.js', 'public/**/*.css'], function () {
    livereload.reload();
  });
  gulp.watch(['./bower_components/bootstrap/scss/bootstrap.scss', 'lib/front/**/*.css', 'lib/front/**/*.scss'], ['sass']);
  gulp.watch('lib/front/**/*.html', ['templates']);
});

gulp.task('mongo-express', function () {
  exec('node ./node_modules/mongo-express/app.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    console.log('mongo-express running...');
  });
});

gulp.task('dev', ['mongo-express'], function () {
  nodemon({
      script: './bin/www',
      ext: 'jade js',
      ignore: ['lib/front/**/*.js', 'public/build/**/*.js']
    })
    .on('restart', function () {
      console.log('restarted!');
    });
});

gulp.task('default', ['dev', 'watch', 'templates']);

function swallowError(error) {

  // If you want details of the error in the console
  console.log(error.toString());

  this.emit('end');
}
