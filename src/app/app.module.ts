import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CardsModule } from './cards/cards.module';
import { LayoutModule } from './shared/layout/layout.module';
import { LifeModule } from "./life/life.module";
import { ResumeModule } from './resume/resume.module';

import { AppComponent } from './app.component';
import { routing } from './app.routes';

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
        LifeModule,
        ResumeModule,
        routing
    ],
    providers: []
})
export class AppModule { }
