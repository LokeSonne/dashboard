import { Component, Input } from '@angular/core';

@Component({
    selector: 'vs-tile',
    templateUrl: 'app/shared/tile/tile.component.html',
    styleUrls: ['app/shared/tile/tile.component.css'],
})
export class TileComponent {
    @Input() title: string;
    @Input() xs_size: number;
    @Input() sm_size: number;
    @Input() md_size: number;
    @Input() lg_size: number;

}
