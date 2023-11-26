const gulp = require("gulp");
const postcss = require("gulp-postcss");
const postcssSass = require("@csstools/postcss-sass");
const rename = require("gulp-rename");
const pxtorem = require("postcss-pxtorem");
const postcssPresetEnv = require("postcss-preset-env");

gulp.task("styles", function () {
  return gulp
    .src("styles/index.pcss")
    .pipe(
      postcss([postcssSass(), pxtorem({ propList: ["*"] }), postcssPresetEnv()])
    )
    .pipe(rename({ extname: ".css" }))
    .pipe(gulp.dest("styles"));
});

gulp.task("watch", function () {
  gulp.watch("styles/index.pcss", gulp.series("styles"));
});
