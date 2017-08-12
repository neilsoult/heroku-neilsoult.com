import { Component, Input } from '@angular/core';
import { XkcdStripProperties } from '../../shared/types';

@Component({
    selector: 'xkcd-strip',
    templateUrl: './xkcd-strip.component.html',
    styleUrls: ['./xkcd-strip.component.styl']
})
export class XkcdStripComponent {

    @Input('properties') props: XkcdStripProperties;

    constructor () { }

}