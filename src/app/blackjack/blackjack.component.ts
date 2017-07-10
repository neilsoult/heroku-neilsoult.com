import { Component } from '@angular/core';

import { HeaderService } from '../shared/header/header.service';
import { Card } from '../../models/card';
import { BlackjackDeck } from '../../models/blackjackDeck';

@Component({
    templateUrl: './blackjack.component.html',
    styleUrls: ['./blackjack.component.styl']
})
export class BlackjackComponent {

    dealer: Array<Card> = [];
    deck: BlackjackDeck;
    discard: Array<Card> = [];
    hands: Array<Array<Card>> = [];

    constructor (private headerService: HeaderService) {

        headerService.setTitle('BlackJack');

        this.deck = new BlackjackDeck(2);
        this.deck.shuffleAll(20);

    }

    deal (players: number) {

        this.deck.deal(players);
        this.dealer = this.deck.dealer;
        this.hands = this.deck.hands;

    }

}
