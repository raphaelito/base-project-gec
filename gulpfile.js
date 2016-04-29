var gulp = require('gulp'),
  jade = require('gulp-jade'),
  connect = require('gulp-connect'),
  open = require('gulp-open'),

  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  gutil = require('gulp-util');

  require('es6-promise').polyfill(); // for autoprefixer

var conf = {
  jade_path_watch: ['front/templates/*.jade', 'front/templates/**/*.jade'],
  jade_path_from:  'front/templates/*.jade',

  sass_path_watch: ['front/styles/*.sass', 'front/styles/**/*.sass'],
  sass_path_from: 'front/styles/*.sass',

  port: '8001'
}

gulp.task('connect', function () {
  connect.server({
    port: conf.port,
    root: './'
      /*livereload: true*/
  });
});

gulp.task('jade', function () {
  return gulp.src(conf.jade_path_from)
    .pipe(jade({
      pretty: true
    }).on('error', function (err) {
      var displayErr = gutil.colors.red(err);
      gutil.log(displayErr);
      gutil.beep();
      this.emit('end');
    }))
    .pipe(gulp.dest('./'))
    //.pipe(connect.reload());
});

gulp.task('sass', function () {
  return gulp.src(conf.sass_path_from)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', function (err) {
      var displayErr = gutil.colors.red(err);
      gutil.log(displayErr);
      gutil.beep();
      this.emit('end');
    }))
    .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('css'));
  //.pipe(gulp.dest(conf.sass_path_dest + '/tmp'));
});

gulp.task('watch', function () {
  gulp.watch(conf.jade_path_watch, ['jade']);
  gulp.watch(conf.sass_path_watch, ['sass']);
});

gulp.task('open', function () {
  gulp.src('')
    .pipe(open({
      app: 'firefox',
      uri: 'http://localhost:' + conf.port
    }));
});

gulp.task('default', ['connect', 'watch', 'open']);
