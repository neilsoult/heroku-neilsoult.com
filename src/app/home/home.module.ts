import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { routing } from './home.routes';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        routing
    ],
    providers: [
        HomeService
    ]
})
export class HomeModule { }
