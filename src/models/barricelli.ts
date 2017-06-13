import helper from '../util/factory';
import { rng } from './rng';

const genes = {
    0: '#0066CC', // rgb(0,102,204)
    1: '#99CCCC', // rgb(153,204,204)
    2: '#99FFFF', // rgb(153,255,255)
    3: '#33FF99', // rgb(51,255,153)
    4: '#00CC66', // rgb(0,204,102)
    5: '#009933', // rgb(0,153,51)
    6: '#33FF66', // rgb(51,255,102)
    7: '#00FF33', // rgb(0,255,51)
    8: '#CC00CC', // rgb(204,0,204)
    9: '#9900CC', // rgb(153,0,204)
    10: '#330066', // rgb(51,0,102)
    11: '#663399', // rgb(102,51,153)
    12: '#FFCC00', // rgb(255,204,0)
    13: '#FFCC33', // rgb(255,204,51)
    14: '#CCCCFF', // rgb(204,204,255)
    15: '#99CCFF', // rgb(153,204,255)
    16: '#3399FF', // rgb(51,153,255)
    17: '#CCFFFF', // rgb(204,255,255)
    18: '#000000', // rgb(0,0,0)
    19: '#336633', // rgb(51,102,51)
    20: '#009900', // rgb(0,153,0)
    21: '#339933', // rgb(51,153,51)
    22: '#669966', // rgb(102,153,102)
    23: '#99CC99', // rgb(153,204,153)
    24: '#FFCCFF', // rgb(255,204,255)
    25: '#FF99FF', // rgb(255,153,255)
    26: '#FF66FF', // rgb(255,102,255)
    27: '#FF3300', // rgb(255,51,0)
    28: '#FF9900', // rgb(255,153,0)
    29: '#FF6600', // rgb(255,102,0)
    30: '#CC6699', // rgb(204,102,153)
    31: '#003300', // rgb(0,51,0)
    32: '#00CC33', // rgb(0,204,51)
    33: '#006633', // rgb(0,102,51)
    34: '#339966', // rgb(51,153,102)
    35: '#66CC99', // rgb(102,204,153)
    36: '#99FFCC', // rgb(153,255,204)
};

// based on http://cultureandcommunication.org/galloway/Barricelli/Barricelli.pde
export default class {

    private MAX_GENE: number = 37;
    private MIN_GENE: number = 0;

    private cells: Array<Array<number>>;
    private drawCellHeight: number = 9;
    private drawCellWidth: number = 2;
    private generations: number = 32;
    private seed: number = 512;
    private universe: number = this.seed - 1;

    constructor () {

        this.drawCellHeight = 1;
        this.drawCellWidth = 1;
        this.generations *= 16;
        this.seed = 512;
        this.universe = this.seed - 1;

        // size() - define the viewing area

        this.cells = helper.createMultiArray(this.universe, this.generations - 1);

        // noStroke() - no stroke outline drawn; irrelevant

        // frameRate(20) - we should 'draw' 20 times per second

    }

    aNorm (a: number, g: number) {

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

    drawCells (ctx: CanvasRenderingContext2D) {

        // background(255) - set background to white
        // loop through cells, draw each cell
        for (let i = 0; i < this.cells.length; i++) {

            for (let j = 0; j < this.cells[i].length; j++) {

                // ctx.beginPath();
                ctx.fillStyle = genes[this.cells[i][j]];
                ctx.fillRect(i, j, 1, 1);

            }

        }

    }

    drawOnce (ctx: CanvasRenderingContext2D) {

        this.initCells();
        this.evolve();
        this.drawCells(ctx);

    }

    evolve () {

        for (let i = 0; i < this.cells.length - 1; i++) {

            for (let j = 0; j < this.cells[i].length; j++) {

                let x = this.cells[i][j];
                this.shift(x, i, j, x, 0);

            }

        }

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

        for (let i = 0; i < this.cells.length; i++) {

            for (let j = 0; j < this.cells[i].length; j++) {

                this.cells[i][j] = j === 0 ? this.randomGene() : 0;

            }

        }

    }

    isBelowEmptyCell (a: number, g: number): boolean {

        if (g === 0) {

            return false;

        }

        return this.cells[a][g - 1] === 0;

    }

    randomGene (): number {

        return rng(this.MAX_GENE, this.MIN_GENE);

    }

    shift (x: number, xA: number, xG: number, deltaA: number, reproductions: number) {

        if (x === 0) {

            return;

        }

        let nA = this.wrapToUniverse(xA + deltaA);
        let nG = xG + 1; // next generation
        let n = this.getCellValue(nA, nG);

        //shift - collision
        if (n !== 0 && x !== n) {

            let multiplier = 2;

            // see page 155 of 1957 paper(?)
            if ((nA <= 63 * multiplier) || (nA <= 255 * multiplier)) {

                this.bNorm(nA, nG);

            }
            else {

                this.aNorm(nA, nG);

            }

        // shift - no collision
        } else {

            this.shiftNorm(x, nA, nG);

        }

    }

    shiftNorm (gene: number, a: number, g: number) {

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

        this.cells[a][g] = 0;

    }

}
