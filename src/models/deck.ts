import errors from './errors';
import helper from '../util/factory'; // TODO: replace array creation with createMultiArray
import { Card } from './card';
import { rng } from './rng';
import { Face, FaceArray, Suit, SuitArray } from './types';

export class Deck {

    private _cards: Array<Card> = [];
    private _hands: Array<Array<Card>> = helper.createMultiArray(1, 1);

    private dealOneCardToAllHands () {

        console.log('dealOneCardToAllHands');
        if (this._hands.length && this._cards.length >= this._hands.length) {

            console.log('if block hands length', this._hands.length);
            for (let i = 0; i < this._hands.length; i++) {

                console.log('for', i, this._hands);
                console.log('pushing to', this._hands[i], this._hands.length);
                if (!this._hands[i]) {

                    this._hands[i] = [];

                }
                this._hands[i].push(this._cards.shift());
                // console.log('cards, hands', this._cards, this._hands);

            }

        }

    }

    private reorderAllCards () {

        console.log('reorderAllCards');
        let shuffler: Array<Card> = [...this._cards].concat(...this._hands);
        this._cards = [];
        this._hands = [[]];

        while (shuffler.length) {

            let idx = rng(shuffler.length - 1);
            this._cards.push(shuffler[idx]);
            shuffler.splice(idx, 1);

        }

    }

    constructor () {

        console.log('constructor');
        SuitArray.forEach((suit) => {

            FaceArray.forEach((face) => {

                this._cards.push(new Card(face, suit));

            });

        });

    }

    deal (hands: number, handSize?: number) {

        console.log('deal');
        if (hands > this._hands.length) {

            this._hands[hands - 1] = [];

        }

        if (hands > this._cards.length || (handSize && (this._hands.length / handSize) > hands)) {

            throw new Error(errors.badDeal);

        }

        if (handSize) {

            while (this._hands[0].length < handSize) {

                console.log('while hands length', this._hands[0].length, handSize);
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

        console.log('get cards');
        return this._cards;

    }

    getCard (cardIndex: number, handIndex?: number) {

        console.log('getCard');
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

        console.log('shuffleAll');
        for (let i = 0; i < times; i++) {

            this.reorderAllCards();

        }

    }

}
