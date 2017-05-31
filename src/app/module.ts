import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CardsModule } from './cards/module';
import { LayoutModule } from './shared/layout/module';
import { ResumeModule } from './resume/module';

import { AppComponent } from './component';
import { routing } from './routes';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CardsModule,
        CommonModule,
        FormsModule,
        HttpModule,
        LayoutModule,
        ResumeModule,
        routing
    ],
    providers: []
})
export class AppModule { }
