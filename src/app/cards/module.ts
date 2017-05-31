import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardsComponent } from './component';
import { routing } from './routes';

@NgModule({
    declarations: [
        CardsComponent
    ],
    imports: [
        CommonModule,
        routing
    ]
})
export class CardsModule { }
