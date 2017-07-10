import { Component } from '@angular/core';

import { HeaderService } from '../shared/header/header.service';
import { Card } from '../../models/card';
import { Deck } from '../../models/deck';

@Component({
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.styl']
})
export class CardsComponent {

    deck: Deck;
    hands: Array<Array<Card>> = [];
    handSize: number = 5;
    numberOfHands: number = 2;
    showDeck: boolean = false;

    constructor (headerService: HeaderService) {

        headerService.setTitle('Cards');

        this.deck = new Deck();
        // console.log('deck constructed: ', this.deck);

    }

    dealHands () {

        // console.log(`prepare to deal ${this.handSize} cards to ${this.numberOfHands} hands`);
        this.deck.deal(this.numberOfHands, this.handSize);
        this.hands = this.deck.hands;

     }

    shuffleDeck () {

        this.deck.shuffleAll();
        this.hands = [];

    }

}
