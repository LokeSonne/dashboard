import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Auth } from '../auth/auth.service';

@Component({
    selector: 'as-navbar',
    templateUrl: 'app/shared/navbar/navbar.component.html',
    styleUrls: ['app/shared/navbar/navbar.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    @Input() brand: string;

    constructor(private _auth: Auth) { }
}
