// gulp nunjucks-index nunjucks-pages

// ==== Requirements ==== //
const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');
const fs = require('fs');
const path = require('path');

// ==== Defualt Task ==== //
function defaultTask(cb) {
  cb();
}

// ==== Build Index ==== //
gulp.task('nunjucks-index', function () {
  return (
    gulp
      // -- Collect Index
      .src('pages/index.html')
      // -- Collect text from .json files
      // -- About --
      .pipe(
        data(function () {
          return require('./json/about.json');
        })
      )
      // -- Origin --
      .pipe(
        data(function () {
          return require('./json/origin.json');
        })
      )
      // -- Compile partials from templates
      .pipe(
        nunjucksRender({
          path: ['templates'],
        })
      )
      // -- Output files to chapters folder
      .pipe(gulp.dest('./'))
  );
});
// ==== Build Pages ==== //
gulp.task('nunjucks-pages', function () {
  return (
    gulp
      // -- Collect pages
      .src('pages/sub-pages/**.html')
      // -- Collect text from .json files
      // -- Songs --
      .pipe(
        data(function () {
          return require('./json/songList.json');
        })
      )
      // -- About --
      .pipe(
        data(function () {
          return require('./json/about.json');
        })
      )
      // -- Origin --
      .pipe(
        data(function () {
          return require('./json/origin.json');
        })
      )
      // -- Compile partials from templates
      .pipe(
        nunjucksRender({
          path: ['templates'],
        })
      )
      // -- Output files to chapters folder
      .pipe(gulp.dest('./bodhi/'))
  );
});

exports.default = defaultTask;
