import { Component } from '@angular/core';
import { XkcdStripService } from './xkcd-strip.service';

@Component({
    selector: 'xkcd-strip',
    templateUrl: './xkcd-strip.component.html',
    styleUrls: ['./xkcd-strip.component.styl']
})
export class XkcdStripComponent {

    hoverText: string;
    imgSrc: string;
    title: string;

    constructor (private xkcdStripService: XkcdStripService) {

        xkcdStripService.test();
        this.hoverText = xkcdStripService.hoverText;
        this.imgSrc = xkcdStripService.imgSrc;
        this.title = xkcdStripService.title;

    }


}
