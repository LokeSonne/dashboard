var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config')();
var bs = require("browser-sync");

gulp.task('sass', function () {
    return gulp.src(config.assetsPath.styles + 'main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.assetsPath.styles))
        .pipe(bs.stream());
});

gulp.task('sass:modules', function () {
    return gulp.src('src/app/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest("src/app"))
        .pipe(bs.stream());
});

gulp.task('watch-sass', function () {
    gulp.watch(config.assetsPath.styles + '**/*.scss', ['sass']);
    gulp.watch('src/app/**/*.scss', ['sass:modules']);
});
