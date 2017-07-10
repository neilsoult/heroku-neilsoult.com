import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from '../shared/layout/layout.module';
import { BlackjackComponent } from './blackjack.component';
import { routing } from './blackjack.routes';

@NgModule({
    declarations: [
        BlackjackComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        routing
    ]
})
export class BlackjackModule { }
