import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class HeaderService {

    private title: BehaviorSubject<string> = new BehaviorSubject('Neil Soult');
    title$: Observable<string> = this.title.asObservable();

    setTitle (newTitle: string) {

        this.title.next(newTitle);

    }

}
