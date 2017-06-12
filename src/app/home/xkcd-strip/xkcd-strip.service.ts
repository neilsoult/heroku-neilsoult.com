import { Injectable } from '@angular/core';

@Injectable()
export class XkcdStripService {

    private _hoverText: string = 'sample hover text';
    private _imgSrc: string = 'https://imgs.xkcd.com/comics/dubious_study.png';
    private _title: string = 'sample title';

    constructor () { }

    get hoverText () {

        return this._hoverText;

    }

    get imgSrc () {

        return this._imgSrc;

    }

    get title () {

        return this._title;

    }

}
