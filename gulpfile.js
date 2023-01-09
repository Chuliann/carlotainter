import gulp from "gulp"
import webp from "gulp-webp"
 
gulp.task('default', () =>
    gulp.src('src/img/**.jpeg')
        .pipe(webp())
        .pipe(gulp.dest('src/img'))
);
