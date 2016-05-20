// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var del = require('del'),
	sass =  require('gulp-sass'),
	plumber = require('gulp-plumber'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	cache = require('gulp-cached'),
	plumber = require('gulp-plumber'),
	server = require( 'gulp-develop-server' ),
	browserSync = require('browser-sync').create();

// Clean Task
gulp.task('clean', function(cb){

	// Clear Public folder before running tasks
	del.sync(['./public/**/*']);

	// Call callback for chaining
	cb(null);
});

// Sass Task
gulp.task('scss', function() {
	return gulp.src('src/scss/main.scss')

		// Error Handling to not end gulp
		.pipe(plumber({
			errorHandler: function (error) {
				console.log(error.message);
				this.emit('end');
			}
		}))
		// Error Handling to not end gulp
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		// Move to production
		.pipe(gulp.dest('public/css'))
		// Updates local server
		.pipe(browserSync.stream());
});

// Javascript Task
gulp.task('js', function(){
	return gulp.src('src/js/**/*')
		// Cache files so only updates changes
		.pipe(cache('javascript'))
		// Error Handling to not end gulp
		.pipe(plumber({
			errorHandler: function (error) {
				console.log(error.message);
				this.emit('end');
			}
		}))
		// Conditional to only compress JS Files
		// Ignores Handlebar Templates
		.pipe( gulpif( '**/*.js' , uglify() ) )
		// Move to production
		.pipe(gulp.dest('public/js'))
		// Updates local server
		.pipe(browserSync.stream());
});

// HTML Task
gulp.task('html', function() {
    return gulp.src('src/index.html')
	 	  // Move to production
        .pipe(gulp.dest('public/'))
		  // Updates local server
		  .pipe(browserSync.stream());
});

// Watch Files For Changes
gulp.task('watch', function() {
	// Watch for changes in development and run correct task
	gulp.watch('src/scss/**/*.scss', ['scss']);
	gulp.watch('src/js/**/*', ['js']);
	gulp.watch('src/index.html', ['html']);

	// Update data server
	gulp.watch( [ './server.js' ], server.restart );
});

// Local Server
gulp.task('sync', function() {
  return browserSync.init({
		server: {
			//load production files
			baseDir: "public/"
		}
  });
});

// Create Data server
gulp.task('server', function(){
	server.listen( { path: './server.js' } );
})

// Default Task - run tasks
gulp.task('default', ['clean', 'scss', 'html', 'js', 'watch', 'sync', 'server']);
