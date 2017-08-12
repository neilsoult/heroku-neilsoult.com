import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BlackjackModule } from './blackjack/blackjack.module';
import { CardsModule } from './cards/cards.module';
import { HomeModule } from './home/home.module';
import { LayoutModule } from './shared/layout/layout.module';
import { LifeModule } from "./life/life.module";
import { ResumeModule } from './resume/resume.module';
import { XkcdModule } from './xkcd/xkcd.module';

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
        BlackjackModule,
        BrowserModule,
        CardsModule,
        CommonModule,
        FormsModule,
        HomeModule,
        HttpModule,
        LayoutModule,
        LifeModule,
        ResumeModule,
        routing,
        XkcdModule
    ],
    providers: []
})
export class AppModule { }
