import helper from '../util/factory';
import { rng } from './rng';

// based on http://cultureandcommunication.org/galloway/Barricelli/
export default class {

    private MAX_GENE: number = 18;
    private MAX_REPRODUCTIONS: number = 2;
    private MIN_GENE: number = -18;

    private cells: Array<Array<number>>;
    // private drawCellHeight: number;
    // private drawCellWidth: number;
    private generations: number;
    private seed: number = 512;
    private universe: number;

    // debug
    // aNormTracker: number = 0;
    // bNormTracker: number = 0;
    // shiftNormTracker: number = 0;
    // zeroNormTracker: number = 0;
    // zeroTracker: number = 0;

    constructor () {

        // this.drawCellHeight = 1;
        // this.drawCellWidth = 1;
        this.generations = this.seed;
        this.universe = this.seed - 1;

        this.cells = helper.createMultiArray(this.universe, this.generations);

    }

    aNorm (a: number, g: number) {

        // console.log('aNorm');
        // this.aNormTracker++;
        this.baseNorm(a, g, (a: number, g: number, u: number, v: number) => {

            let sum: number = this.getLeftDistance(a, g) + this.getRightDistance(a, g);
            return this.haveSameSign(u, v) ? sum : sum * -1;

        });

    }

    baseNorm (a: number, g: number, calculate: Function) {

        if (!this.isBelowEmptyCell(a, g)) { // collision under empty cell

            this.zeroNorm(a, g); // set to zero

        } else {

            let u: number = this.getRightGeneValue(a, g);
            let v: number = this.getLeftGeneValue(a, g);

            this.cells[a][g] = calculate(a, g, u, v);

        }

    }

    bNorm (a: number, g: number) {

        // console.log('bNorm');
        // this.bNormTracker++;
        this.baseNorm(a, g, (a: number, g: number, u: number, v: number) => {

            let sum: number = this.getLeftDistance(a, g) + this.getRightDistance(a, g) - 1;
            return this.haveSameSign(u, v) ? sum : sum * -1;

        });

    }

    cNorm (a: number, g: number) {

        this.baseNorm(a, g, (a: number, b: number, u: number, v: number) => {

            return v - u;

        });

    }

    dNorm (a: number, g: number) {

        let b: number = this.getCellValue(a, g - 1);
        let c: number = this.getCellValue(a + b, g -1);
        let d: number = this.getCellValue(a - b, g - 1);

        if (c !== d) { // collision if not equal

            this.zeroNorm(a, g); // set to zero

        } else {

            this.cells[a][g] = (b * -1) + (2 * c);

        }

    }

    drawOnce (callback: Function) {

        this.initCells();
        this.evolve();
        callback(this.cells);

    }

    evolve () {

        // console.group();

        for (let i = 0; i < this.generations - 1; i++) {

            for (let j = 0; j < this.universe; j++) {

                let x = this.cells[j][i];
                this.shift(x, j, i, x, 0);

            }

        }

        // console.log('aNormTracker: ', this.aNormTracker);
        // console.log('bNormTracker: ', this.bNormTracker);
        // console.log('shiftNormTracker: ', this.shiftNormTracker);
        // console.log('zeroNormTracker: ', this.zeroNormTracker);
        // console.log('zeroTracker: ', this.zeroTracker);
        // console.groupEnd();

    }

    // safe for universe wrapping
    getCellValue (universe: number, generation: number): number {

        generation = generation < 0 ? 0 : generation;
        universe = this.wrapToUniverse(universe);
        return this.cells[universe][generation];

    }

    getLeftDistance (a: number, g: number): number {

        let v = 0;
        while (this.getCellValue(a - v, g - 1) === 0) {

            v++;
            v = this.wrapToUniverse(v);

        }

        return v;

    }

    getLeftGeneValue (a: number, g: number): number {

        return this.getCellValue(a - this.getLeftDistance(a, g), g - 1);

    }

    getRightDistance (a: number, g: number): number {

        let u = 0;
        while (this.getCellValue(a + u, g - 1) === 0) {

            u++;
            u = this.wrapToUniverse(u);

        }

        return u;

    }

    getRightGeneValue (a: number, g: number): number {

        return this.getCellValue(a + this.getRightDistance(a, g), g - 1);

    }

    haveSameSign (a: number, b: number): boolean {

        return (a > 0 && b > 0) || (a < 0 && b < 0);

    }

    initCells () {

        // console.group();
        for (let i = 0; i < this.cells.length; i++) {

            for (let j = 0; j < this.cells[i].length; j++) {

                this.cells[i][j] = j === 0 ? this.randomGene() : 0;

            }

        }
        // console.groupEnd();

    }

    isBelowEmptyCell (a: number, g: number): boolean {

        if (g === 0) {

            return false;

        }

        return this.cells[a][g - 1] === 0;

    }

    randomGene (): number {

        let random = rng(this.MAX_GENE, this.MIN_GENE);
        // console.log('random:', random);
        return random;

    }

    shift (x: number, xA: number, xG: number, deltaA: number, reproductions: number) {

        if (x === 0) {

            // console.log('x is 0');
            // this.zeroTracker++;
            return;

        }

        let nA = this.wrapToUniverse(xA + deltaA);
        let nG = xG + 1; // next generation
        let n = this.getCellValue(nA, nG);

        // shift - collision
        if (n !== 0 && x !== n) {

            let multiplier = 2;

            // see page 155 of 1957 paper(?)
            if ((nA <= 63 * multiplier) || (nA <= 255 * multiplier)) {

                this.bNorm(nA, nG);

            } else {

                this.aNorm(nA, nG);

            }

        // shift - no collision
        } else {

            this.shiftNorm(x, nA, nG);

        }

        // reproduce
        reproductions++;
        let y = this.getCellValue(xA + deltaA, xG);
        if (y !== 0 && reproductions <= this.MAX_REPRODUCTIONS) {

            this.shift(x, xA, xG, y, reproductions);

        }

    }

    shiftNorm (gene: number, a: number, g: number) {

        // console.log('shiftNorm');
        // this.shiftNormTracker++;
        this.cells[this.wrapToUniverse(a)][g] = gene;

    }

    wrapToUniverse (i: number): number {

        i = i % this.universe;

        if (i < 0) {

            i = this.universe + i;

        }

        if (i >= this.universe) {

            i = i - this.universe;

        }

        return i % this.universe;

    }

    zeroNorm (a: number, g: number) {

        // console.log('zeroNorm');
        // this.zeroNormTracker++;
        this.cells[a][g] = 0;

    }

}
