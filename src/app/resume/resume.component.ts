import { Component } from '@angular/core';
import { HeaderService } from '../shared/header/header.service';

@Component({
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.styl']
})
export class ResumeComponent {

    constructor (headerService: HeaderService) {

        headerService.setTitle('Résumé');

    }

}
