import { Face, Suit } from './types';

export class Card {

    private face: Face;
    private suit: Suit;

    constructor (face: Face, suit: Suit) {

        this.face = face;
        this.suit = suit;

    }

    get getFace () {

        return Face[this.face];

    }

    get getName () {

        return `${Face[this.face]} of ${Suit[this.suit]}`;

    }

    get getSuit () {

        return Suit[this.suit];

    }

}
