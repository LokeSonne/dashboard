System.register(['@angular/core', 'angular2-jwt/angular2-jwt', '@angular/router', '../index'], function(exports_1, context_1) {
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
    var core_1, angular2_jwt_1, router_1, index_1;
    var Auth;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            Auth = (function () {
                function Auth(_router) {
                    var _this = this;
                    this._router = _router;
                    this._lock = new Auth0Lock(index_1.CONSTANTS.ENV.AUTH0_CLIENT_ID, index_1.CONSTANTS.ENV.AUTH0_DOMAIN, {});
                    this._lock.on('authenticated', function (authResult) {
                        _this._authenticatedCallback(authResult);
                    });
                }
                Auth.prototype.login = function () {
                    this._lock.show();
                };
                ;
                Auth.prototype.authenticated = function () {
                    return angular2_jwt_1.tokenNotExpired('id_token');
                };
                ;
                Auth.prototype.logout = function () {
                    localStorage.removeItem('id_token');
                    localStorage.removeItem('visuate-profile');
                    this._router.navigate(['/']);
                };
                ;
                Auth.prototype._authenticatedCallback = function (authResult) {
                    var _this = this;
                    localStorage.setItem('id_token', authResult.idToken);
                    this._lock.getProfile(authResult.idToken, function (error, profile) {
                        if (error) {
                            console.error(error);
                            return;
                        }
                        localStorage.setItem('visuate-profile', JSON.stringify(profile));
                        _this.user = profile;
                    });
                    this._router.navigate(['/dashboard']);
                };
                Auth = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Auth);
                return Auth;
            }());
            exports_1("Auth", Auth);
        }
    }
});
//# sourceMappingURL=auth.service.js.map