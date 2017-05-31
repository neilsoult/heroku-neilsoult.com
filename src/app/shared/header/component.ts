import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './component.html',
    styleUrls: ['./component.styl']
})
export class HeaderComponent {

    @Input() title: string;

    constructor() { }

}
