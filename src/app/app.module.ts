import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AUTH_PROVIDERS } from 'angular2-jwt/angular2-jwt';
import { HttpModule } from '@angular/http';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule, TileModule, Auth } from './shared';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TodolistModule } from './todolist/todolist.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpModule,
        BrowserModule,
        NavbarModule,
        TileModule,
        HomeModule,
        DashboardModule,
        TodolistModule,
        routing
    ],
    providers: [
        Auth,
        APP_PROVIDERS,
        AUTH_PROVIDERS,
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
