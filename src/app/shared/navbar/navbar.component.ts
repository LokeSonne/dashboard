import { Component, Input } from '@angular/core';
import { Auth } from '../auth/auth.service';

@Component({
    selector: 'vs-navbar',
    templateUrl: 'app/shared/navbar/navbar.component.html',
    styleUrls: ['app/shared/navbar/navbar.component.css'],
})
export class NavbarComponent {
    @Input() brand: string;

    constructor(private _auth: Auth) { }
}
