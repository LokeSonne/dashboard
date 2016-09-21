System.register(['./dashboard.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var dashboard_component_1;
    var DashboardRoutes;
    return {
        setters:[
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            }],
        execute: function() {
            exports_1("DashboardRoutes", DashboardRoutes = [
                { path: 'dashboard', component: dashboard_component_1.DashboardComponent }
            ]);
        }
    }
});
//# sourceMappingURL=dashboard.routes.js.map