const gulp = require('gulp');
const run = require('gulp-run');

const projectName = 'pretty-code';
const distDir = '../../dist/' + projectName;

gulp.task('build:angular-package', function () {
  return run('ng build ' + projectName, {}).exec();
});

gulp.task('version', function () {
  return run('npm version patch ', {}).exec();
});

gulp.task('build:copy-styles', function () {
    return gulp.src(['src/lib/style/ng-io-theme.scss'])
        .pipe(gulp.dest(distDir));
});

gulp.task('default', gulp.series(['build:angular-package', 'build:copy-styles', 'version'], function(){
  console.log('done')
}))