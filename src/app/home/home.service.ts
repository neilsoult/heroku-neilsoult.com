import { Injectable } from '@angular/core';
import { LinkDef } from '../shared/header/nav-bar/nav-bar.component';

export type TileDef = LinkDef;

@Injectable()
export class HomeService {

    private _tiles: Array<TileDef>;

    constructor () {

        this._tiles = [
            {
                route: '/resume',
                text: 'resume'
            },
            {
                route: '/life',
                text: 'life'
            },
            {
                route: '/cards',
                text: 'cards'
            }
        ];

    }

    get tiles () {

        return this._tiles;

    }

}
