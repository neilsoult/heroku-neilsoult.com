import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HeaderService } from './header.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.styl']
})
export class HeaderComponent {

    title$: Observable<string>;

    constructor (private headerService: HeaderService) {}

    ngOnInit () {

        this.title$ = this.headerService.title$;

    }

}
