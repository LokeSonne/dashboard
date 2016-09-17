import { NgModule } from '@angular/core';
import { HomeComponent } from './index';

import { TileModule } from '../shared';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        TileModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {
}
