var gulp = require('gulp');
var requireDir = require('require-dir');
var tasks = requireDir('./config/gulp/tasks');
var dashboard = require('./config/gulp/utils/dashboard');

dashboard.show();

/* Default task */
gulp.task('default', ['serve-dev']);
