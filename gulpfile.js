/**
 * 全局安装gulp
 * npm install --global gulp
 * 安装依赖项
 * npm install gulp-jshint gulp-sass gulp-concat gulp-uglify gulp-rename --save-dev
 * 运行gulp
 * gulp
 */

// 引入 gulp
var gulp        = require('gulp');
// 引入组件
var sass        = require('gulp-sass');// Sass 编译成 CSS
var prefix      = require('gulp-autoprefixer');//根据设置浏览器版本自动处理浏览器前缀
var minifyCSS   = require('gulp-minify-css'); //压缩css
var rename      = require('gulp-rename'); //重命名文件
var browserSync = require('browser-sync').create();// 实时响应，自动刷新

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

// Build css files
gulp.task('compressCSS', function() {
    gulp.src('src/css/*.scss')
        .pipe(sass())
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(minifyCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

// Watch files for changes & recompile
gulp.task('watch', function () {
    gulp.watch(['src/css/*.scss'], ['compressCSS']);
});

// Default task, running just `gulp` will move font, compress js and scss, start server, watch files.
gulp.task('default', ['compressCSS', 'browser-sync', 'watch']);