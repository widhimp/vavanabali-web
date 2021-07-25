var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('style', function(){
    return gulp.src('assets/scss/vavanabali.scss')
      .pipe(sass())
      .pipe(gulp.dest('assets/css'))
});

gulp.task('watch', function() {
    gulp.watch('assets/scss/*.scss', gulp.series('style'));
});

gulp.task('default', gulp.series(['style', 'watch']));