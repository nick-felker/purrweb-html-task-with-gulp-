const autoprefixer = require('gulp-autoprefixer')
var gulp = require('gulp');
const minifyCss = require('gulp-clean-css');

gulp.task('default', function () {
    console.log("fsdfs");
    return gulp.src('main.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('css'));
        
        


        
});
