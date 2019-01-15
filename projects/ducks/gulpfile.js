const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync  = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const pug = require('gulp-pug');

// Optimize Images
gulp.task('imageMin', () =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('build/images'))
);

// Compile Sass
gulp.task('sass', function(){
  gulp.src('src/sass/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(gulp.dest('build/css'))
      .pipe(browserSync.stream());
});


// Compile Pug
gulp.task('pug', function(){
  return gulp.src('src/pug/pages/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('build'))
  .pipe(browserSync.stream());
});


// Scripts
gulp.task('scripts', function(){
  gulp.src('src/js/*.js')
      .pipe(concat('main.js'))
      .pipe(gulp.dest('build/js'));
});

// Watch & Serve
gulp.task('serve',['sass', 'pug'], function() {
  browserSync.init({
      server: "./build"  
  });

  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/sass/*.sass', ['sass']);
  gulp.watch('src/pug/pages/*.pug', ['pug']);
  gulp.watch("build/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
