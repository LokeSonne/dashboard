System.register(['./main', './env'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var main_1, env_1;
    var CONSTANTS;
    return {
        setters:[
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (env_1_1) {
                env_1 = env_1_1;
            }],
        execute: function() {
            exports_1("CONSTANTS", CONSTANTS = {
                MAIN: main_1.MAIN,
                ENV: env_1.ENV
            });
        }
    }
});
//# sourceMappingURL=index.js.map