var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return sass('sass/styles.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('css'));
});

gulp.task('autoprefixer', function () {
	return gulp.src('css/styles.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
   gulp.watch('sass/*.scss', ['sass']);
   gulp.watch('css/*.css', ['autoprefixer']);
});

gulp.task('default', ['sass', 'autoprefixer', 'watch']);