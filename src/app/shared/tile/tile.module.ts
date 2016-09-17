import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { TileComponent } from './index';

@NgModule({
    declarations: [
        TileComponent
    ],
    imports: [
        RouterModule,
        BrowserModule
    ],
    exports: [
        TileComponent
    ]
})
export class TileModule {
}
