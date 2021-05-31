// my working template

const { src, dest, series, watch, parallel } = require("gulp");
const scss = require("gulp-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const del = require("del");
const browserSync = require("browser-sync").create();
const imagemin = require("gulp-imagemin");
const rename = require("gulp-rename");

function styles() {
  return src("src/scss/style.scss")
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(rename("style.min.css"))
    .pipe(dest("src/css"))
    .pipe(browserSync.stream());
}

function scripts() {
  return src(["src/js/**/*.js", "!src/js/script.min.js"])
    .pipe(concat("script.min.js"))
    .pipe(uglify())
    .pipe(dest("src/js"))
    .pipe(browserSync.stream());
}

function html() {
  return src("src/*.html").pipe(dest("dist"));
}

function images() {
  return src("src/images/**/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("dist/images"));
}

function clear() {
  return del("dist/**");
}

function serve() {
  browserSync.init({
    server: {
      baseDir: "./src",
    },
    port: 3030,
  });
}

function watching() {
  watch("src/*.html", html).on("change", browserSync.reload);
  watch("src/scss/**/*.scss", styles);
  watch(["src/js/**/*.js", "!src/js/script.min.js"], scripts);
}

function build() {
  return src(
    [
      "src/css/style.min.css",
      "src/fonts/**/*",
      "src/js/script.min.js",
      "src/*.html",
    ],
    { base: "src" }
  ).pipe(dest("dist"));
}

// exports.html = html;
// exports.styles = styles;
// exports.scripts = scripts;
// exports.clear = clear;

exports.build = series(clear, styles, scripts, images, build);
exports.default = series(scripts, styles, parallel(serve, watching));
