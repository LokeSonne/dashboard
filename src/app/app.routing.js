System.register(['@angular/router', './home/index', './dashboard/index', './todolist/index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, index_1, index_2, index_3;
    var appRoutes, appRoutingProviders, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }],
        execute: function() {
            appRoutes = index_1.HomeRoutes.concat(index_2.DashboardRoutes, index_3.TodolistRoutes);
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routing.js.map