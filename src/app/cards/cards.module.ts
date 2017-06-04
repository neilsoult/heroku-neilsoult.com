import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardsComponent } from './cards.component';
import { CardComponent } from './card/card.component';

import { routing } from './cards.routes';

@NgModule({
    declarations: [
        CardsComponent,
        CardComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        routing
    ]
})
export class CardsModule { }
