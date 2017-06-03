import { Component } from '@angular/core';
import { HeaderService } from '../shared/header/service';

@Component({
    templateUrl: './component.html',
    styleUrls: ['./component.styl']
})
export class ResumeComponent {

    constructor (headerService: HeaderService) {

        headerService.setTitle('Résumé');

    }

}
