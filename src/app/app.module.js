System.register(['@angular/core', '@angular/platform-browser', 'angular2-jwt/angular2-jwt', './app.providers', './app.component', './app.routing', './shared', './home/home.module', './dashboard/dashboard.module', './todolist/todolist.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, angular2_jwt_1, app_providers_1, app_component_1, app_routing_1, shared_1, home_module_1, dashboard_module_1, todolist_module_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (app_providers_1_1) {
                app_providers_1 = app_providers_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            },
            function (home_module_1_1) {
                home_module_1 = home_module_1_1;
            },
            function (dashboard_module_1_1) {
                dashboard_module_1 = dashboard_module_1_1;
            },
            function (todolist_module_1_1) {
                todolist_module_1 = todolist_module_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            app_component_1.AppComponent
                        ],
                        imports: [
                            platform_browser_1.BrowserModule,
                            shared_1.NavbarModule,
                            shared_1.TileModule,
                            home_module_1.HomeModule,
                            dashboard_module_1.DashboardModule,
                            todolist_module_1.TodolistModule,
                            app_routing_1.routing
                        ],
                        providers: [
                            shared_1.Auth,
                            app_providers_1.APP_PROVIDERS,
                            angular2_jwt_1.AUTH_PROVIDERS,
                            app_routing_1.appRoutingProviders
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map