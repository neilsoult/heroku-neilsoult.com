import { Component } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.styl']
})
export class NavBarComponent {

    links: Array<Object> = [
        {
            route: '/home',
            text: 'Home'
        },
        {
            route: '/resume',
            text: 'Résumé'
        },
        {
            route: '/cards',
            text: 'Cards'
        }
    ];

}
