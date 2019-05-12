const gulp = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const rename = require('gulp-rename')
const replace = require('gulp-replace')
const pack = require('./package.json')

const exportModuleName = 'XEClipboard'

gulp.task('build_common', function () {
  return gulp.src('index.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(rename({
      basename: pack.name,
      extname: '.common.js'
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('build_umd', function () {
  return gulp.src('index.js')
    .pipe(babel({
      moduleId: pack.name,
      presets: ['@babel/env'],
      plugins: [
        ['@babel/transform-modules-umd', {
          globals: {
            [pack.name]: exportModuleName
          },
          exactGlobals: true
        }]
      ]
    }))
    .pipe(replace(`global.${exportModuleName} = mod.exports;`, `global.${exportModuleName} = mod.exports.default;`))
    .pipe(rename({
      basename: pack.name
    }))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('build', gulp.parallel('build_common', 'build_umd'))
