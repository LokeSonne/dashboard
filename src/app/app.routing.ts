import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { DashboardRoutes } from './dashboard/index';
import { TodolistRoutes } from './todolist/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...DashboardRoutes,
    ...TodolistRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
