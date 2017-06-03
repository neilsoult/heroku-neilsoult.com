import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardsComponent } from './component';
import { routing } from './routes';

@NgModule({
    declarations: [
        CardsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        routing
    ]
})
export class CardsModule { }
