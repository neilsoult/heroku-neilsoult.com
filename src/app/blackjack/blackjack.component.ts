import { Component } from '@angular/core';

import { HeaderService } from '../shared/header/header.service';
import { Card } from '../../models/card';
import { Deck } from '../../models/deck';

@Component({
    templateUrl: './blackjack.component.html',
    styleUrls: ['./blackjack.component.styl']
})
export class BlackjackComponent {

    constructor (private headerService: HeaderService) {

        headerService.setTitle('BlackJack');

    }
}
