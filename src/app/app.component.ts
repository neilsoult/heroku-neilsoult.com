import { Component } from '@angular/core';
import { Deck } from '../models/deck';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})
export class AppComponent {

    title: string = 'Résumé';
    deck: Deck;

    constructor () {

        this.deck = new Deck();
        console.log(this.deck);
        console.log('top card:', this.deck.getCard(0).getName);
        this.deck.shuffle();
        console.log('top card after shuffle: ', this.deck.getCard(0).getName);

    }

}
