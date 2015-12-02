//check https://gist.github.com/aaronwaldon/8657432  live envent

var
  gulp = require('gulp'),
  jade = require('gulp-jade'),
  connect = require('gulp-connect'),
  open = require('gulp-open'),
  compass = require('gulp-compass'),
  concat = require('gulp-concat'),
  gutil = require('gulp-util');
/*
  uglify = require('gulp-uglify'),
  rename = require("gulp-rename"),
  order = require("gulp-order");
*/

var conf = {
  jade_path_watch: 'front/templates/**/*.jade',
  jade_path: 'front/templates/*.jade',
  jade_path_dest: 'html',

  sass_path_watch: 'front/styles/**/*.sass',
  sass_path_base: 'front/styles/*.sass',
  sass_path: 'front/styles',
  sass_path_dest: 'css',

  js_path_watch: 'front/scripts/*.js',
  js_path: 'front/scripts',
  js_path_dest: 'js',
  js_name_unified: 'core.js',

  www_port: 3000,
  www_root: './',
  www_browser: 'google-chrome'
};



gulp.task('jade', function () {
  return gulp.src(conf.jade_path)
    .pipe(jade({
      pretty: true
    }).on('error', gutil.log))
    .pipe(gulp.dest(conf.jade_path_dest))
    .pipe(connect.reload());
});

gulp.task('compass', function () {
  return gulp.src(conf.sass_path_base)
    .pipe(compass({
      sass: conf.sass_path,
      css: conf.sass_path_dest,
      sourcemap: true,
      style: 'compressed',
    }).on('error', gutil.log))
    .pipe(connect.reload());
  //.pipe(gulp.dest(conf.sass_path_dest + '/tmp'));

});

gulp.task('js', function () {
  return gulp.src(conf.js_path)
    /*
      .pipe(uglify({
        beautify: true
      }))
      */
    .pipe(gulp.dest(conf.js_path_dest))
    .pipe(concat(conf.js_name_unified))
    .pipe(gulp.dest(conf.js_path_dest));
});

gulp.task('watch', function () {
  gulp.watch(conf.jade_path_watch, ['jade']);
  gulp.watch(conf.js_path_watch, ['js']);
  gulp.watch(conf.sass_path_watch, ['compass']);
});


gulp.task('connect', function () {
  connect.server({
    port: conf.www_port,
    root: conf.www_root,
    livereload: true
  });
});

gulp.task('open', function () {
  gulp.src('')
    .pipe(open({
      app: conf.www_browser,
      uri: 'http://localhost:' + conf.www_port + '/html/home.html'
    }));
});


gulp.task('default', ['connect', 'watch', 'open']);
