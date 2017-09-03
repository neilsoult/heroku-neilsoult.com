import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { XkcdStripProperties } from '../../shared/types';

@Injectable()
export class XkcdStripService {

    constructor (private http: Http) { }

    getRandomStrip (): Observable<XkcdStripProperties> {

        return this.http.get(`${environment.apiPath}/xkcd`)
        .map((response: Response) => {

            console.log('response', response.json());
            return response.json();

        });

    }

}
