import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from '../footer/component';
import { HeaderComponent } from '../header/component';
import { HeaderService } from '../header/service';

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
    ],
    providers: [
        HeaderService
    ]
})
export class LayoutModule { }
