import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XkcdComponent } from './xkcd.component';
import { XkcdStripComponent } from './xkcd-strip/xkcd-strip.component';
import { routing } from './xkcd.routes';
import { XkcdStripService } from './xkcd-strip/xkcd-strip.service';

@NgModule({
    declarations: [
        XkcdComponent,
        XkcdStripComponent
    ],
    imports: [
        CommonModule,
        routing
    ],
    providers: [
        XkcdStripService
    ]
})
export class XkcdModule { }
