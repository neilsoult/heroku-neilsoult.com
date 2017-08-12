import { Component } from '@angular/core';

declare type Links = {
    text: string;
    uri: string;
};

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.styl']
})
export class FooterComponent {

    links: Array<Links> = [
        {
            text: 'Github',
            uri: 'https://github.com/neilsoult'
        },
        {
            text: 'StackOverflow',
            uri: 'http://stackoverflow.com/users/1218816/neil-s'
        },
        {
            text: 'view source',
            uri: 'https://github.com/neilsoult/heroku-neilsoult.com'
        },
        {
            text: 'LinkedIn',
            uri: 'https://www.linkedin.com/in/neil-soult-26a7397/'
        }
    ];

}
