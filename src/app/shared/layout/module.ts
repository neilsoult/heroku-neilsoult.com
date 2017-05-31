import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from '../footer/component';
import { HeaderComponent } from '../header/component';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent
    ],
    exports: [
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule
    ]
})
export class LayoutModule { }
