import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeComponent } from './life.component';
import { routing } from './life.routes';

@NgModule({
    declarations: [
        LifeComponent
    ],
    imports: [
        CommonModule,
        routing
    ]
})
export class LifeModule { }
