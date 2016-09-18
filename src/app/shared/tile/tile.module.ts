import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { TileComponent } from './index';

@NgModule({
    declarations: [
        TileComponent
    ],
    imports: [
        RouterModule,
        BrowserModule,
        ChartsModule
    ],
    exports: [
        TileComponent
    ]
})
export class TileModule {
}
