import { Component } from '@angular/core';
import { HeaderService } from '../shared/header/header.service';
import { HomeService, TileDef } from './home.service';

import { environment } from '../../environments/environment';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.styl']
})
export class HomeComponent {

    environment: any;
    tiles: Array<TileDef>;

    constructor (private headerService: HeaderService, private homeService: HomeService) {

        headerService.setTitle('Welcome');
        this.environment = environment;
        this.tiles = homeService.tiles;

    }

}
