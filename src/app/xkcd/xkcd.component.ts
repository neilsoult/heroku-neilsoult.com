import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HeaderService } from '../shared/header/header.service';
import { XkcdStripService } from './xkcd-strip/xkcd-strip.service';
import { XkcdStripProperties } from '../shared/types';

@Component({
    templateUrl: './xkcd.component.html',
    styleUrls: ['./xkcd.component.styl']
})
export class XkcdComponent implements OnInit {

    stripData$: Observable<XkcdStripProperties>;

    constructor (private headerService: HeaderService, private xkcdService: XkcdStripService) {

        headerService.setTitle('xkcd');

    }

    ngOnInit () {

        this.stripData$ = this.xkcdService.getRandomStrip();

    }

}
