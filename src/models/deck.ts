import errors from './errors';
import { Card } from './card';
import { rng } from './rng';
import { Face, FaceArray, Suit, SuitArray } from './types';

export class Deck {

    private _cards: Array<Card> = [];
    private _hands: Array<Array<Card>> = [];

    private dealOneCardToAllHands () {

        if (this._hands.length && this._cards.length >= this._hands.length) {

            for (let i = 0; i < this._hands.length; i++) {

                this._hands[i].push(this._cards.shift())

            }

        }

    }

    private reOrderAllCards () {

        let shuffler: Array<Card> = [...this._cards].concat(...this._hands);
        this._cards = this._hands = [];
        while (shuffler.length) {

            let idx = rng(shuffler.length - 1);
            this._cards.push(shuffler[idx]);
            shuffler.splice(idx, 1);

        }

    }

    constructor () {

        SuitArray.forEach((suit) => {

            FaceArray.forEach((face) => {

                this._cards.push(new Card(face, suit));

            });

        });

        // console.log('Deck constructed! Card count: ', this._cards.length);

    }

    deal (hands: number, handSize?: number) {

        if (hands > this._cards.length || (handSize && (this._hands.length / handSize) > hands)) {

            throw new Error(errors.badDeal);

        }
        this._hands = new Array<Array<Card>>(hands).fill([]);
        console.log('hands - ', this._hands);
        if (handSize) {

            while (this._hands[0].length < handSize) {

                this.dealOneCardToAllHands();

            }

        } else {

            while (this._cards.length > this._hands.length) {

                this.dealOneCardToAllHands();

            }
        }
        return { hands: this._hands, kitty: this._cards };

    }

    get cards () {

        return this._cards;

    }

    getCard (cardIndex: number, handIndex?: number) {

        if (handIndex != null) {

            if (handIndex >= this._hands.length || cardIndex >= this._hands[handIndex].length) {

                throw new Error(errors.badHandIndex);

            }
            return this._hands[handIndex][cardIndex];

        } else {

            if (cardIndex >= this._cards.length) {

                throw new Error(errors.badCardIndex);

            }

            return this._cards[cardIndex];

        }

    }

    shuffleAll (times: number = 10) {

        for (let i = 0; i < times; i++) {

            this.reOrderAllCards();

        }

    }

}
