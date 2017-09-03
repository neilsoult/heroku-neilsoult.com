import { Component } from '@angular/core';

export type LinkDef = {
    route: string;
    text: string;
};

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.styl']
})
export class NavBarComponent {

    links: Array<LinkDef> = [
        {
            route: '/home',
            text: 'Home'
        },
        {
            route: '/resume',
            text: 'Résumé'
        },
        {
            route: '/xkcd',
            text: 'xkcd'
        },
        {
            route: '/life',
            text: 'Life'
        },
        {
            route: '/cards',
            text: 'Cards'
        }
    ];

}
