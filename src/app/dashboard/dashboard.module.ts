import { NgModule } from '@angular/core';
import { DashboardComponent } from './index';

import { TileModule } from '../shared';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        TileModule
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule {
}
