var gulp = require('gulp');
var babel = require("gulp-babel");
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rm = require('del');
var less = require('gulp-less');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var postcss = require('gulp-postcss');

/**
 * 清空编译目录
 */
gulp.task('clean', done => {
    rm.sync(['dist/**']);
    done();
});

/**
 * 构建 js
 */
gulp.task('js', done => {
    // 任务代码在这
    gulp.src(['src/**/*.js', 'src/**/*.jsx'])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env','@babel/preset-react']
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));

    done();
});

/**
 * 构建 css
 */
gulp.task('css', done => {
    var plugins = [
        autoprefixer(),
        cssnano()
    ];

    // 任务代码在这
    gulp.src(['src/**/style/*.less'])
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));

    done();
});

/**
 * 拷贝 less
 */
gulp.task('less', done => {
    // 任务代码在这
    gulp.src(['src/**/style/*.less'])
        .pipe(gulp.dest('dist'));

    done();
});

/**
 * 构建
 */
gulp.task('release', gulp.series('clean', gulp.parallel('css', 'js')));

