System.register(['./dashboard.component', './dashboard.routes', './dashboard.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (dashboard_component_1_1) {
                exportStar_1(dashboard_component_1_1);
            },
            function (dashboard_routes_1_1) {
                exportStar_1(dashboard_routes_1_1);
            },
            function (dashboard_module_1_1) {
                exportStar_1(dashboard_module_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map