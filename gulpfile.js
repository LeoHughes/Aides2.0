var gulp = require("gulp");
var webpack = require('webpack-stream');
var babel = require("gulp-babel");
var uglify = require('gulp-uglify');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");


/**
 * 分别编译各个工具包
 */
gulp.task("ts", function () {
  return tsProject.src()
    .pipe(ts(tsProject))
    .js.pipe(gulp.dest("mod"));
});


/**
 * 统一打包编译Typescript
 */
gulp.task("webpack", function () {

  return webpack({
    entry: "./src/aidesWin.ts",
    resolve: {
      extensions: ['', '.ts']
    },
    output: {
      filename: 'aidesWin.js'
    },
    module: {
      loaders: [
        { test: /\.ts$/, loader: 'ts-loader' }
      ]
    }
  })
    .pipe(gulp.dest("dist"));
})


//编译为es5
gulp.task("es5", ["webpack"], function () {
  return gulp.src(["./dist/aidesWin.js"])
    .pipe(babel({
      presets: ["es2015"]
    }))
     .pipe(
        uglify()
     )             
    .pipe(gulp.dest("dist"));
})


/**
 * 默认任务
 */
gulp.task("default", ["es5","ts"], function () {

  //  监控js文件
  gulp.watch("./src/*.ts", ["es5","ts"]);

});