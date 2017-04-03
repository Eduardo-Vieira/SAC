var gulp   = require('gulp');
var clean  = require('gulp-clean');
var concat = require('gulp-concat');

// Transforma o javascript em formato ilegível para humanos
var uglify = require("gulp-uglify");
var uglifycss = require("gulp-uglifycss");

var files = "./app/";

gulp.task('clean', function() {
    return gulp.src(['www/build/*','www/views/**/*'])
    .pipe(clean());
});

gulp.task('js-libs',['clean'], function(){
  return gulp.src(['app/lib/**/*.min.js','app/lib/**/**/*.min.js'])
    .pipe(concat('libs-build.js'))
    .pipe(gulp.dest('./www/build'));
});

gulp.task('css-libs',['clean'], function(){
  return gulp.src(['app/lib/**/*.min.css',
                   'app/lib/**/**/*.min.css',
                   'app/template/*.css',
                   'app/template/**/*.css',
                  ])
    .pipe(concat('libs-build.css'))
    .pipe(gulp.dest('./www/css'));
});

gulp.task('js-minify',['clean'], function(){
  return gulp.src(['app/src/**/*.js','app/*.js'])
    .pipe(concat('app-build.js'))
    //.pipe(uglify())  // Transforma para formato ilegível
    .pipe(gulp.dest('./www/build'));
});

gulp.task('copyfiles', function() {
    return gulp.src(['app/src/views/**/*',])
    .pipe(gulp.dest('www/views/'));
});

gulp.task('default', [ 'js-minify', 'js-libs', 'css-libs', 'copyfiles']);