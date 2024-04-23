const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function styles() {
    return gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
}

// function purge() {
//     return gulp.src('css/*.css')
//         .pipe(purgecss({
//             content: ['*.html', 'js/*.js'] // HTML va JavaScript fayllari asosida tekshirish
//         }))
//         .pipe(gulp.dest('css'));
// }

function watch() {
    gulp.watch('scss/*.scss', styles);
    // gulp.watch('css/*.css', purge);
}

exports.default = watch;