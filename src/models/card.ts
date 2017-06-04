import { Face, Suit } from './types';

const abbr = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K'
];

export class Card {

    private _face: Face;
    private _suit: Suit;

    constructor (face: Face, suit: Suit) {

        this._face = face;
        this._suit = suit;

    }

    get abbr () {

        return abbr[this._face];

    }

    get face () {

        return Face[this._face];

    }

    get name () {

        return `${Face[this._face]} of ${Suit[this._suit]}`;

    }

    get suit () {

        return Suit[this._suit];

    }

}
