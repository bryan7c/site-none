var gulp      = require('gulp');
var webserver = require('gulp-webserver');
var opn       = require('opn');
var sass      = require('gulp-sass');
var plumber   = require('gulp-plumber');

var folderPaths = {
	scss: './public/sass',
	css: './public/css',
	partials: './public/partial',
  script: './public/script',
  images: './public/img',
  libs: './public/lib',
	views: './public/views'
};

var filePaths = {
	scss: ['./public/sass/style.scss']
}

var server = {
  host: '0.0.0.0',
  port: '9001'
}

gulp.task('webserver', function() {
  gulp.src( 'public' )
    .pipe(webserver({
      host:             server.host,
      port:             server.port,
      directoryListing: false,
      livereload: {
        enable: true, // need this set to true to enable livereload
        filter: function(fileName) {
          if (fileName.match(/sass$/)) { // exclude all source maps from livereload
            return false;
          } else {
            return true;
          }
        }
      }
    }));
});

gulp.task('copy', function() {
    gulp.src([folderPaths.css, folderPaths.script, folderPaths.views, folderPaths.images, folderPaths.partials, folderPaths.libs, "./public/index.html"])
        .pipe(gulp.dest('./dist/'))
});

gulp.task('openbrowser', function() {
  opn( 'http://localhost:' + server.port);
});

gulp.task('sass', function () {
  return gulp.src(filePaths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(folderPaths.css));
});

gulp.task('watch', function(){
  gulp.watch('./public/sass/**/*.scss', ['sass']);
});

gulp.task('build', ["copy"]);

gulp.task('default', ['webserver', 'openbrowser', 'watch']);
