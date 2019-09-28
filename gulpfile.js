const gulp = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const rename = require('gulp-rename')
const replace = require('gulp-replace')
const sourcemaps = require('gulp-sourcemaps')
const ts = require('gulp-typescript')
const pack = require('./package.json')

const exportModuleName = 'XEClipboard'

gulp.task('build_commonjs', function () {
  return gulp.src(['index.ts'])
    .pipe(sourcemaps.init())
    .pipe(ts({
      noImplicitAny: true,
      target: 'es6'
    }))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(rename({
      basename: pack.name,
      extname: '.common.js'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
})

gulp.task('build_umd', function () {
  return gulp.src(['index.ts'])
    .pipe(ts({
      noImplicitAny: true,
      target: 'es6'
    }))
    .pipe(babel({
      moduleId: pack.name,
      presets: [
        '@babel/env'
      ],
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

gulp.task('build', gulp.parallel('build_commonjs', 'build_umd'))
