var gulp = require('gulp');
var concat = require('gulp-concat');                            //- 多个文件合并为一个；
var minifyCss = require('gulp-minify-css');                     //- 压缩CSS为一行；

delete require.cache[require.resolve("gulp-rev")];
var rev = require('gulp-rev');                                  //- 对文件名加MD5后缀
var revCollector = require('gulp-rev-collector');               //- 路径替换
var del  = require('del');
var rename= require('gulp-rename');
var uglify= require('gulp-uglify');

gulp.task('commoncss', function() {                                //- 创建一个名为 concat 的 task
    gulp.src([
        './static/module/common/base.css', //- 需要处理的css文件，放到一个字符串数组里
        './static/module/head/head.css',
        './static/module/foot/foot.css'
       ])
        .pipe(concat('common.css'))                            //- 合并后的文件名
        .pipe(minifyCss())                                      //- 压缩处理成一行
        .pipe(rev())                                            //- 文件名加MD5后缀
        .pipe(gulp.dest('./static/dist/css'))                               //- 输出文件本地
        .pipe(rev.manifest())                                   //- 生成一个rev-manifest.json
        .pipe(gulp.dest('./static/dist/rev/commoncss'));                              //- 将 rev-manifest.json 保存到 rev 目录内
});

gulp.task('commonjs', function() {
    gulp.src([
        './static/module/lib/sea.js',
        './static/module/lib/seajs-combo.js',
        './static/module/lib/lib.js'
        , './static/module/common/base.js'
    ])
        .pipe(concat('common.js'))
        .pipe(gulp.dest('./static/dist/js'))    //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('./static/dist/js'))
        .pipe(rev())
        .pipe(rev.manifest())                                   //- 生成一个rev-manifest.json
        .pipe(gulp.dest('./static/dist/rev/commonjs'));

});

gulp.task('indexcss', function() {
    gulp.src([
        './static/module/index/index.css',
        './static/module/index/index-modify.css',
        './static/module/ui/modal/modal.css'
       , './static/module/ui/clickscroll/clickscroll.css'
       , './static/module/ui/roller/roller.css'
       , './static/module/ui/odometer/odometer.css'
       , './static/module/ui/select/select.css'
    ])
        .pipe(concat('index.css'))
        .pipe(minifyCss())
        .pipe(rev())
        .pipe(gulp.dest('./static/dist/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./static/dist/rev/indexcss'));
});

gulp.task('answercss', function() {
    gulp.src([
        './static/module/index/index.css',
        './static/module/index/index-modify.css',
        './static/module/ui/modal/modal.css'
        , './static/module/ui/clickscroll/clickscroll.css'
        , './static/module/ui/roller/roller.css'
        , './static/module/ui/odometer/odometer.css'
        , './static/module/ui/select/select.css'
        , './static/module/indexanswer/indexanswer.css'
    ])
        .pipe(concat('answer.css'))
        .pipe(minifyCss())
        .pipe(rev())
        .pipe(gulp.dest('./static/dist/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./static/dist/rev/answercss'));
});
gulp.task('best-creditors', function() {
    gulp.src([
        './static/module/index/index.css',
        './static/module/index/index-modify.css',
        './static/module/ui/modal/modal.css'
        , './static/module/ui/clickscroll/clickscroll.css'
        , './static/module/ui/roller/roller.css'
        , './static/module/ui/odometer/odometer.css'
        , './static/module/ui/select/select.css'
        , './static/module/best-creditors/best-creditors.css'
    ])
        .pipe(concat('best-creditors.css'))
        .pipe(minifyCss())
        .pipe(rev())
        .pipe(gulp.dest('./static/dist/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./static/dist/rev/best-creditorscss'));
});
gulp.task('outnew', function() {
    gulp.src([
        './static/module/index/index.css',
        './static/module/index/index-modify.css',
        './static/module/ui/modal/modal.css'
        , './static/module/ui/clickscroll/clickscroll.css'
        , './static/module/ui/roller/roller.css'
        , './static/module/ui/odometer/odometer.css'
        , './static/module/ui/select/select.css'
    ])
        .pipe(concat('outnew.css'))
        .pipe(minifyCss())
        .pipe(rev())
        .pipe(gulp.dest('./static/dist/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./static/dist/rev/outnew'));
});
gulp.task('safety', function() {
    gulp.src([
        './static/module/index/index.css',
        './static/module/index/index-modify.css',
        './static/module/ui/modal/modal.css'
        , './static/module/ui/clickscroll/clickscroll.css'
        , './static/module/ui/roller/roller.css'
        , './static/module/ui/odometer/odometer.css'
        , './static/module/ui/select/select.css'
    ])
        .pipe(concat('safety.css'))
        .pipe(minifyCss())
        //.pipe(rev())
        .pipe(gulp.dest('./static/dist/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./static/dist/rev/safety'));
});

gulp.task('revcollectorcss', function () {
    return gulp.src(['./static/dist/rev/**/*.json', './static/index.html'])
        .pipe(revCollector())
        .pipe(gulp.dest( './static'));
});

gulp.task('clean',function(){
    del(['./static/dist/**/*.js','./static/dist/**/*.css'])
})

gulp.task('default', ['commoncss','indexcss']);
//
//监听文件
gulp.task('default', ['clean'], function(){
    //return gulp.watch('./src/sass/*.scss',['sass']);
    //监听 ./src/sass/*.scss 文件，修改时自动执行 sass 任务。
   gulp.start('commoncss','indexcss','answercss','best-creditors','outnew','safety','commonjs','revcollectorcss');
});


gulp.task('watch', ['clean'], function () {
    gulp.watch(['./static/module/**/*.js','./static/module/**/*.css'], ['default']);
});