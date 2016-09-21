import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt/angular2-jwt';
import { Router } from '@angular/router';

import { CONSTANTS } from '../index';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
    public user: Object;
    private _lock = new Auth0Lock(CONSTANTS.ENV.AUTH0_CLIENT_ID, CONSTANTS.ENV.AUTH0_DOMAIN, {
        auth: {
            params: {
                scope: 'openid email'
            }
        }
    });

    constructor(private _router: Router) {
        this._lock.on('authenticated', (authResult) => {
            this._authenticatedCallback(authResult);
        });
    }

    public login() {
        this._lock.show();
    };

    public authenticated(): boolean {
        return tokenNotExpired('id_token');
    };

    public getToken(): string {
        return localStorage.getItem('id_token');
    }

    public logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('visuate-profile');
        this._router.navigate(['/']);
    };

    private _authenticatedCallback(authResult): void {
        localStorage.setItem('id_token', authResult.idToken);
        this._lock.getProfile(authResult.idToken, (error, profile) => {
            if (error) { console.error(error); return; }
            localStorage.setItem('visuate-profile', JSON.stringify(profile));
            this.user = profile;
            this._router.navigate(['/dashboard']);
        });
    }
}
