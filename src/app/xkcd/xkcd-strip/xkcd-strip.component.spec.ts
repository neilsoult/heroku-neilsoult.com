import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XkcdStripComponent } from './xkcd-strip.component';

describe('XkcdStripComponent', () => {

    let component: XkcdStripComponent;
    let fixture: ComponentFixture<XkcdStripComponent>;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [ XkcdStripComponent ]
        })
        .compileComponents();

    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(XkcdStripComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should be created', () => {

        expect(component).toBeTruthy();

    });

});
