var gulp        = require('gulp'),
	sass        = require('gulp-sass'),// Компиляция SASS в CSS
	browserSync = require('browser-sync'),// Автоматическое обновление страницы браузера
	concat      = require('gulp-concat'),// Конкатенация файлов
	uglify      = require('gulp-uglifyjs'),// Сжатие JS
	cssnano     = require('gulp-cssnano'),// Минификация CSS
	rename      = require('gulp-rename'),
	del         = require('del'),// Переименование файлов
	imagemin    = require('gulp-imagemin'),// Работа с изображениями
	pngquant    = require('imagemin-pngquant'),// Работа с PNG
	cache       = require('gulp-cache'),// Кеширование
	autoprefixer = require('gulp-autoprefixer'),// Подстановка префиксов
	autopolyfiller = require('gulp-autopolyfiller'),//Полифилы для JS
	plumber = require('gulp-plumber');// Ошибки


// gulp.task('mytask', function () {
// 	return gulp.src('source-files') // Выборка исходных файлов для обработки плагином
// 		.pipe(plugin()) // Вызов Gulp плагина для обработки файла
// 		.pipe(gulp.dest('folder')) // Вывод результирующего файла в папку назначения (dest - пункт назначения)
// })

gulp.task('sass',function(){
	return gulp.src('app/sass/**/*.sass')
		.pipe(plumber())
		.pipe(sass())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browserSync', function(){
	browserSync({
		server: {
			baseDir: 'app',
			index: 'about_us.html'
		},
		notify: false
	});
});

gulp.task('autopolyfiller', function () {
	return gulp.src('app/js/**/*.js')
		.pipe(autopolyfiller('result_polyfill_file.js'))
		.pipe(gulp.dest('app/js'));
});

gulp.task('scripts', function() {
	return gulp.src([
	'app/libs/jquery/dist/jquery.min.js',
	'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js'])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'));
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*')
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('css-libs', function() {
	return gulp.src('app/css/libs.css')
		.pipe(cssnano())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('app/css'));
});

gulp.task('clean', function() {
	return del.sync('dist');
});

//Подготовка к продакшену

gulp.task('build',['clean', 'img', 'sass', 'scripts'], function() {

	//CSS
	var buildCss = gulp.src(['app/css/style.css','app/css/libs.min.css'])
	.pipe(gulp.dest('dist/css'))

	//FONTS
	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'))

	//JS
	var buildJs = gulp.src('app/js/**/*')
	.pipe(gulp.dest('dist/js'))

	//HTML
	var buildHTML = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));
});

//Watch
gulp.task('watch', ['browserSync','sass', 'autopolyfiller', 'scripts', 'css-libs'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

//Дефолтный таск
gulp.task('default', ['watch']);

//Таск для отчистки кэша
gulp.task('clear', function () {
	return cache.clearAll();
});