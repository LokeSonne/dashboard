import { Component, OnInit } from '@angular/core';
import { Auth } from '../shared';
import { Router } from '@angular/router';

@Component({
    selector: 'vs-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(private _auth: Auth, private _router: Router) {
    }

    ngOnInit(): void {
        if (!this._auth.authenticated()) {
            this._router.navigate(['/']);
            alert('You have to be logged in to see this page.');
        }

    }
}
