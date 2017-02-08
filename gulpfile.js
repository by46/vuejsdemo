var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jslint = require('gulp-jslint');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('browser-sync', function () {
    var files = ['src/demo.html'];
    browserSync.init({
        server: {baseDir: '.'}
    });
});

gulp.task('minify', function () {
    gulp.src('js/component.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['browser-sync', 'watch']);

gulp.task('watch', function () {
    gulp.watch(['js/*.js',
            'src/*.html',
            '*.html'],
        reload);
});

gulp.task('js', function () {
    return gulp.src('js/mock.js')
        .pipe(jslint())
        //.pipe(jslint.reporter('default'))
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build'));
});