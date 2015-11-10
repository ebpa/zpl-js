var gulp = require("gulp");
var babel = require("gulp-babel");
var shell = require('gulp-shell');
var exec = require('gulp-exec');

gulp.task("default", function () {
    return gulp.src("src/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

gulp.task('print', ['default'], shell.task('node dist/print.js'));