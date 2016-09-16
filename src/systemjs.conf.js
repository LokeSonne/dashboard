(function (global) {

    global.ENV = global.ENV || 'development';

    var map = {
        'app': 'src/tmp/app',
        'test': 'src/tmp/test'
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
        }
    };

    // List npm packages here
    var npmPackages = [
        '@angular',
        'rxjs',
        'lodash',
        'angular2-jwt',
        'auth0-lock'
    ];

    // Add package entries for packages that expose barrels using index.js
    var packageNames = [
        'app/shared',
        'lodash'
    ];

    // Add package entries for angular packages
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router'
    ];

    npmPackages.forEach(function (pkgName) {
        map[pkgName] = 'node_modules/' + pkgName;
    });

    packageNames.forEach(function (pkgName) {
        packages[pkgName] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
    });

    ngPackageNames.forEach(function (pkgName) {
        map['@angular/' + pkgName] = 'node_modules/@angular/' + pkgName + '/bundles/' + pkgName + '.umd.js';
        map['@angular/' + pkgName + '/testing'] = 'node_modules/@angular/' + pkgName + '/bundles/' + pkgName + '-testing.umd.js';
    });

    var config = {
        map: map,
        packages: packages
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);
