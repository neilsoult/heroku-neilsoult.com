import { Injectable } from '@angular/core';

export type TileDef = {
    img: string;
    route: string;
    text: string;
};

@Injectable()
export class HomeService {

    private _tiles: Array<TileDef>;

    constructor () {

        this._tiles = [
            {
                img: 'resume.png',
                route: '/resume',
                text: 'resume'
            },
            {
                img: 'life.png',
                route: '/life',
                text: 'life'
            },
            {
                img: 'cards.png',
                route: '/cards',
                text: 'cards'
            }
        ];

    }

    get tiles () {

        return this._tiles;

    }

}
