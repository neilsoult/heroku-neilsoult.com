import { TestBed, inject } from '@angular/core/testing';

import { XkcdStripService } from './xkcd-strip.service';

describe('XkcdStripService', () => {

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [XkcdStripService]
        });

    });

    it('should be created', inject([XkcdStripService], (service: XkcdStripService) => {

        expect(service).toBeTruthy();

    }));

});
