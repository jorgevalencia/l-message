// 'use strict';
//
// import browserSync from 'browser-sync';
// import gulp from 'gulp';
// import gulpLoadPlugins from 'gulp-load-plugins';
//
// import routes from '../config/routes';
// import fn from '../config/functions';
//
// const $ = gulpLoadPlugins({ camelize: true });
//
// var TIMESTAMP = new Date().getTime();
//
// gulp.task('markup', $.config.markup.tasks, function () {
//     if (!fs.existsSync($.config.markup.data)) {
//         $.fn.errorAlert();
//         return false;
//     }
//
//     jsonData = EROSKI.parseJsonFiles();
//     jsonData.env = ENV || 'default';
//
//     var s = plug.size({ title: 'Markup' });
//     var TWIG_ARGS = {
//         data: jsonData,
//         cache: false,
//         functions: [
//             { name: 'getUrlPrefix', func: EROSKI.twig.getUrlPrefix },
//             { name: 'getLandingPath', func: EROSKI.twig.getLandingPath },
//             { name: 'getSubstraction', func: EROSKI.twig.getSubstraction },
//             { name: 'toArray', func: EROSKI.twig.toArray },
//             { name: 'twiglog', func: $.twig.twiglog }
//         ],
//         filters: [
//             { name: 'getAttribute', func: EROSKI.twig.getAttribute },
//             { name: 'specialSplit', func: EROSKI.twig.specialSplit },
//             { name: 'indexOf', func: $.twig.twigIndexOf }
//         ]
//     };
//
//     return gulp.src($.config.markup.files)
//         .pipe(plug.plumber({ errorHandler: $.fn.errorAlert }))
//         .pipe(plug.twig(TWIG_ARGS))
//         .pipe(plug.replace(/\{\*timestamp\*\}/g, TIMESTAMP))
//         .pipe(plug.htmlmin($.config.markup.minify))
//         .pipe(s)
//         .pipe(gulp.dest($.config.markup.destination))
//         .pipe(plug.notify({
//             onLast: true,
//             message: function () {
//                 return 'Total size of markup ' + s.prettySize;
//             }
//         }));
// });
