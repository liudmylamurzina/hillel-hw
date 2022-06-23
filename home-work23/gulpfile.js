const gulp=require('gulp');
//const clean=require('gulp-clean');
//const concat=require('gulp-concat');
//const {series,parallel,src,dest}=require('gulp');
//function cleanDist() {
//	return src('dist/*',{read:false}).pipe(clean());
//};
function copyHtml() {
	return gulp.src('./public/index.html').pipe(gulp.dest('./dist'));
};
function copyCss() {
	return 	gulp.src(['../common/css/normalize.css','../common/css/skeleton.css','../common/css/dark-theme.css','src/**/*.css'])
	//.pipe(concat('app.css'))
	.pipe	(gulp.dest('./dist/css'));
};
function copyJs() {
	return gulp.src('src/**/*.js')
	//.pipe(concat('app.js'))
 .pipe(gulp.dest('./dist'));
};

module.exports={
	//build:gulp.series (cleanDist,gulp.parallel(copyHtml,copyCss)),
	build:gulp.parallel(copyHtml,copyCss,copyJs),
};