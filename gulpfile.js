import gulp from "gulp"
import webp from "gulp-webp"
 
gulp.task('default', () =>
    gulp.src('src/img/**.png')
        .pipe(webp())
        .pipe(gulp.dest('src/img'))
);
