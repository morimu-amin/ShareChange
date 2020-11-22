const gulp = require("gulp");
const sass = require("gulp-sass");
const plumber = require('gulp-plumber');
const pug = require("gulp-pug");
const autoprefixer =require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const notify = require('gulp-notify');


const paths = {
  src: 'src',
  dest: 'dest'
};

//Sass
gulp.task('sass', function () {
  return gulp.src([
      paths.src + '/scss/**/*.scss',
      '!' + 'paths.src' +'/scss/**/_*.scss'
    ])
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
      }))
      .pipe(autoprefixer({
        overrideBrowserslist: 'last 2 versions'
      }))
      .pipe(gulp.dest(paths.dest + '/css'))
    });

//Pug
gulp.task('pug', function () {
  return gulp.src([
      paths.src + '/pug/**/*.pug',
      '!' + 'paths.src' + '/pug/**/_*.pug'
      ])
      .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
      }))
      .pipe(pug({pretty: true}))
      .pipe(gulp.dest(paths.dest))
    });


//Image File
gulp.task('image', () => {
  return gulp.src(
      paths.src + '/img/**/*'
    )
    .pipe(gulp.dest(paths.dest + '/img'))
});

// browser-sync
gulp.task('browser-sync', function(done) {
  browserSync({
      server: {
          baseDir: paths.dest
      }});
      done();
});

//watch
gulp.task('watch', function() {
  const reload = () => {
    browserSync.reload();
  };
  gulp.watch([paths.src + '/scss/**/*']).on('change', gulp.series('sass', reload));
  gulp.watch([paths.src + '/pug/**/*']).on('change', gulp.series('pug', reload));
  gulp.watch([paths.src + '/img/**/*']).on('change', gulp.series('image', reload));
});

gulp.task('default', gulp.series(gulp.parallel('sass','pug','image','watch','browser-sync')));
