import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';
import { XkcdStripComponent } from './xkcd-strip/xkcd-strip.component';
import { XkcdStripService } from './xkcd-strip/xkcd-strip.service';
import { routing } from './home.routes';

@NgModule({
    declarations: [
        HomeComponent,
        XkcdStripComponent
    ],
    imports: [
        HttpModule,
        routing
    ],
    providers: [
        XkcdStripService
    ]
})
export class HomeModule { }
