import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HeaderService } from './service';

@Component({
    selector: 'app-header',
    templateUrl: './component.html',
    styleUrls: ['./component.styl']
})
export class HeaderComponent {

    title$: Observable<string>;

    constructor (private headerService: HeaderService) {}

    ngOnInit () {

        this.title$ = this.headerService.title$;

    }

}
