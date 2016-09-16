import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'as-navbar',
    templateUrl: 'app/shared/navbar/navbar.component.html',
    styleUrls: ['app/shared/navbar/navbar.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
    @Input() brand: string;
}
