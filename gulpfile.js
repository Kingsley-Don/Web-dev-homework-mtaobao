var gulp      = require('gulp'),
    connect   = require('gulp-connect'),
    autoprefixer = require('gulp-autoprefixer'),
    rename    = require('gulp-rename'),
    cleancss = require('gulp-clean-css'),
    livereload= require('gulp-livereload'),
    uglify    = require('gulp-uglify'),
    imagemin  = require('gulp-imagemin'),
    sass      = require('gulp-ruby-sass');

gulp.task('default', ['html' , 'sass', 'js', 'img', 'server', 'watch']);

gulp.task('server', [], function() {
    return connect.server({
        root: [ 'public' ],
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src(['./src/views/*.html', './src/views/**/*.html'])
        .pipe(gulp.dest('public/views'))
        .pipe(livereload());
    gulp.src(['./src/*.html'])
        .pipe(gulp.dest('public'))
        .pipe(livereload());
});

gulp.task('img', function () {
    gulp.src('./src/images/*.*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('public/assets/images'));
});

gulp.task('sass', function() {
    return sass('src/stylesheets/*.scss')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(autoprefixer({
            browsers: ['last 5 Chrome versions', 'iOS > 0', 'Android > 0', '> 5%'],
            cascade: true,
            remove: true
        }))
        .pipe(cleancss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/assets/stylesheets'))
        .pipe(livereload());
});

gulp.task('js', function() {
    gulp.src(['./src/javascript/*.js','./src/javascript/**/*.js'])
        .pipe(uglify())
        //.pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/assets/javascript'))
        .pipe(livereload());
    //.pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('src/stylesheets/*.scss', ['sass']);
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/views/*.html', ['html']);
    gulp.watch('src/javascript/*.js', ['js']);
});


