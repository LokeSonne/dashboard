/**
 * THIS FILE IS GENERATED by `gulp env` command from `env.json`
 * Generated on <%= new Date() %>
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ENV;
    return {
        setters:[],
        execute: function() {
            exports_1("ENV", ENV = {} <  % _.forEach(env, function (v, k) {
                 %  >
                ;
                k %  > ;
                ;
                _.isString(v) ? "\'" + v + "\'" : v %  > ,  % ;
            }) %  >
            );
            ;
        }
    }
});
//# sourceMappingURL=env.js.map