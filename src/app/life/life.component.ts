import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import Life from '../../models/barricelli';

import { HeaderService } from '../shared/header/header.service';

@Component({
    templateUrl: './life.component.html',
    styleUrls: ['./life.component.styl']
})
export class LifeComponent implements OnInit {

    @ViewChild('primordialSoup') canvas: ElementRef;

    life: Life;

    constructor (headerService: HeaderService) {

        headerService.setTitle('Life');
        this.life = new Life();

    }

    ngOnInit () {

        let ctx: CanvasRenderingContext2D = this.canvas.nativeElement.getContext('2d');
        this.life.drawOnce(ctx);
        /*ctx.beginPath();
        ctx.fillStyle = '#DD0031';
        ctx.moveTo(256, 256);
        ctx.arc(256, 256, 50, 0, Math.PI * 2);
        ctx.fill();*/

    }

}
