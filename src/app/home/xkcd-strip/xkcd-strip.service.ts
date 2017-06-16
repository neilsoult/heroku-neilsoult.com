import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class XkcdStripService {

    private _hoverText: string = 'sample hover text';
    private _imgSrc: string = 'https://imgs.xkcd.com/comics/dubious_study.png';
    private _title: string = 'sample title';

    result: Object = {};

    constructor (private http: Http) {

        http.get('https://xkcd.com/rss.xml')
        .map((response: Response) => {

            console.log('response', response.json());

        })
        .subscribe((result: any) => {

            console.log('result:', result);
            this.result = result;

        });

    }

    get hoverText () {

        return this._hoverText;

    }

    get imgSrc () {

        return this._imgSrc;

    }

    get title () {

        return this._title;

    }

    test () {

        this.http.get('https://xkcd.com/rss.xml')
        .map((response: Response) => {

            console.log('response', response.json());

        })
        .catch((error: Response | any) => {

            console.log('error', error);
            return Observable.of({ error });

        });

    }

}
