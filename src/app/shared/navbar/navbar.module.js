System.register(['@angular/core', '@angular/router', '@angular/platform-browser', './index'], function(exports_1, context_1) {
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
    var core_1, router_1, platform_browser_1, index_1;
    var NavbarModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            NavbarModule = (function () {
                function NavbarModule() {
                }
                NavbarModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            index_1.NavbarComponent
                        ],
                        imports: [
                            router_1.RouterModule,
                            platform_browser_1.BrowserModule
                        ],
                        exports: [
                            index_1.NavbarComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NavbarModule);
                return NavbarModule;
            }());
            exports_1("NavbarModule", NavbarModule);
        }
    }
});
//# sourceMappingURL=navbar.module.js.map