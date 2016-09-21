import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Auth } from '../';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { CONSTANTS } from '../index';

@Injectable()
export class Api {

    private _baseUrl = 'https://visuatedataapi.azurewebsites.net/data';
    private _headers;

    constructor(private _http: Http, private _auth: Auth) {
        this._headers = new Headers();
        this._headers.append('Authorization', 'Bearer ' + this._auth.getToken());
        this._headers.append('auth0_domain', CONSTANTS.ENV.AUTH0_DOMAIN);
    }

    public getData(chart: string): Observable<Response> {
        return this._http.get(this._generateRequestUrl(chart), { headers: this._headers })
            .map((response: Response) => response.json())
            .do(data => console.log(data))
            .catch(this._handleError);
    }

    private _generateRequestUrl(chart: string): string {
        // TODO : for testing purpose
        return this._baseUrl + '/queryname/' + chart + '/startdate/2016-08-01/enddate/2016-08-30';
    }

    private _handleError(e: Response): any {
        return Observable.throw(e.json().error || 'Server error');
    }

}
