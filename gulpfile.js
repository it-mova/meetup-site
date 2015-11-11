var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var babel = require('gulp-babel');
var react = require('gulp-react');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

//client

gulp.task('less', function () {
    return gulp.src('./src/client/less/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        //.pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./lib/public/css'));
});

gulp.task('react', function() {
    gulp.src('./src/client/js/**/*.jsx')
        .pipe(babel())
        .pipe(react())
        .pipe(uglify())
        .pipe(gulp.dest('./lib/public/js'));
});

gulp.task('js', function() {
    gulp.src('./src/client/js/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('./lib/public/js'));
});

gulp.task('img', function() {
    gulp.src('./src/client/img/**/*.*')
        .pipe(gulp.dest('./lib/public/img'));
});

gulp.task('html', function() {
    gulp.src('./src/client/**/*.html')
        .pipe(gulp.dest('./lib/public'));
});


gulp.task('font-awesome-font', function() {
    gulp.src('./src/client/font-awesome/fonts/*')
        .pipe(gulp.dest('./lib/public/font-awesome/fonts'));
});

gulp.task('font-awesome-less', function() {
    return gulp.src('./src/client/font-awesome/less/font-awesome.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./lib/public/font-awesome/css'));
});

gulp.task('font-awesome', ['font-awesome-font', 'font-awesome-less']);

gulp.task('client', ['less', 'html', 'js', 'img', 'font-awesome', 'react']);
//server

gulp.task('copyJS', function() {
    gulp.src('./src/server/**/*.js')
        .pipe(gulp.dest('./lib'));
});

gulp.task('json', function() {
    gulp.src('./src/server/**/*.json')
        .pipe(gulp.dest('./lib'));
});

gulp.task('server', ['copyJS', 'json']);

gulp.task('default', ['client', 'server']);

