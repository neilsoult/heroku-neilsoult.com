import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import genes from '../../models/gene';
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

    createLife () {

        let ctx: CanvasRenderingContext2D = this.canvas.nativeElement.getContext('2d');
        this.life.drawOnce((cells) => {

            // loop through cells, draw each cell
            for (let i = 0; i < cells.length; i++) {

                for (let j = 0; j < cells[i].length; j++) {

                    ctx.fillStyle = genes[cells[i][j]];
                    ctx.fillRect(i, j, 1, 1);

                }

            }

        });

    }

    ngOnInit () {

        this.createLife();

    }

}
