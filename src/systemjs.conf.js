(function (global) {

    global.ENV = global.ENV || 'development';

    var map = {
        'app': 'src/tmp/app',
        'test': 'src/tmp/test',
        '@angular': 'node_modules/@angular',
        '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
        '@angular/common/testing': 'node_modules/@angular/common/bundles/common-testing.umd.js',
        '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
        '@angular/compiler/testing': 'node_modules/@angular/compiler/bundles/compiler-testing.umd.js',
        '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
        '@angular/core/testing': 'node_modules/@angular/core/bundles/core-testing.umd.js',
        '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
        '@angular/forms/testing': 'node_modules/@angular/forms/bundles/forms-testing.umd.js',
        '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
        '@angular/http/testing': 'node_modules/@angular/http/bundles/http-testing.umd.js',
        '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser/testing': 'node_modules/@angular/platform-browser/bundles/platform-browser-testing.umd.js',
        '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/platform-browser-dynamic/testing': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
        '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
        '@angular/router/testing': 'node_modules/@angular/router/bundles/router-testing.umd.js',
        'rxjs': 'node_modules/rxjs',
        'lodash': 'node_modules/lodash',
        'angular2-jwt': 'node_modules/angular2-jwt',
        'auth0-lock': 'node_modules/auth0-lock',
        'ng2-charts': 'node_modules/ng2-charts'
    };

    var packages = {
        'app': {
            defaultExtension: 'js'
        },
        'test': {
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        },
        'angular2-jwt': {
            defaultExtension: 'js'
        },
        'app/shared': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'lodash': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'ng2-charts': {
            main: 'bundles/ng2-charts.min.js',
            defaultExtension: 'js'
        }
    };


    var config = {
        map: map,
        packages: packages
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }
    System.config(config);

})(this);
