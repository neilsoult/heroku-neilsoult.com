import { Component, OnInit } from '@angular/core';
import { Deck } from '../../models/deck';

@Component({
    templateUrl: './component.html',
    styleUrls: ['./component.styl']
})
export class CardsComponent implements OnInit {

    deck: Deck;
    title: string = 'Cards';

    constructor () {

        this.deck = new Deck();
        console.log(this.deck);
        console.log('top card:', this.deck.getCard(0).getName);
        this.deck.shuffle();
        console.log('top card after shuffle: ', this.deck.getCard(0).getName);

    }

    ngOnInit () { }

}
