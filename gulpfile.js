var gulp = require('gulp');
var watch = require('gulp-watch');
var gulpImports = require('gulp-imports');
var docs_to_json = require('sa-docs-to-json');

gulp.task('docs', function() {
    return gulp.src('./docs_src/*.json')
    .pipe(docs_to_json())
    .pipe(gulp.dest('./docs/'))
});

gulp.task('default', function(){
    gulp.watch('docs_src/**/**.*', ['docs']);
});