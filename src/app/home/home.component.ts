import { Component } from '@angular/core';
import { HeaderService } from '../shared/header/header.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.styl']
})
export class HomeComponent {

    constructor (private headerService: HeaderService) {

        headerService.setTitle('Welcome');

    }

}
