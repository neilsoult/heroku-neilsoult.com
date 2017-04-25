import { Card } from './card';
import { rng } from './rng';
import { Face, FaceArray, Suit, SuitArray } from './types';

export class Deck {

    private cards: Array<Card> = [];
    private reOrderCards () {

        let shuffler: Array<Card> = this.cards;
        this.cards = [];
        while (shuffler.length) {

            let idx = rng(shuffler.length);
            this.cards.push(shuffler[idx]);
            shuffler.splice(idx, 1);

        }

    }

    constructor () {

        SuitArray.forEach((suit) => {

            FaceArray.forEach((face) => {

                this.cards.push(new Card(face, suit));

            });

        });

        console.log('Deck constructed! Card count: ', this.cards.length);

    }

    deal (hands: number, handSize?: number) {}

    getCard (index: number) {

        if (index >= this.cards.length) {

            throw new Error('Card index is larger than size of deck!');

        }

        return this.cards[index];

    }

    shuffle (times: number = 10) {

        for (let i = 0; i < times; i++) {

            this.reOrderCards();

        }

    }

}
