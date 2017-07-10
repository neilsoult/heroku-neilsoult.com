import helper from '../util/factory';
import { Card } from './card';
import { Deck } from './deck';

export class BlackjackDeck extends Deck {

    private _dealer: Array<Card> = [];
    private _discards: Array<Card> = [];

    protected reorderAllCards () {

        // console.log('reorderAllCards');
        let shuffleMe: Array<Card> = this._cards.concat(
            ...this._hands,
            this._dealer,
            this._discards
        );

        this._dealer = [];
        this._discards = [];
        this._hands = [];

        this._cards = this.shuffler(shuffleMe);

    }

    protected reorderDiscards () {

        // console.log('reorderDiscards');
        this._discards = this.shuffler(this._discards);

    }

    constructor (decks: number) {

        super(decks);

    }

    deal (players: number) {

        console.log(`dealing blackjack to ${players} players`);
        if (!this._hands.length) {

            this._hands = helper.createMultiArray(players, 0);

        }
        if (this._hands[0].length || this._dealer.length) {

            this._discards = this._discards.concat(...this._hands, this._dealer);
            this._hands = helper.createMultiArray(players, 0);
            this._dealer = [];

        }

        if (this._cards.length < ((players + 1) * 2)) {

            this.shuffleDiscards();

        }

        for (let i = 0; i < 2; i++) {

            this._dealer.push(this._cards.shift());
            this.dealOneCardToAllHands();

        }


    }

    get dealer () {

        return this._dealer;

    }

    shuffleDiscards (times: number = 10) {

        // console.log('shuffleDiscards');
        while (times > 0) {

            this.reorderDiscards;
            times--;

        }

        this._cards = this._cards.concat(this._discards);
        this._discards = [];

    }

}
