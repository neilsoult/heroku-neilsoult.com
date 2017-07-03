import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { NavBarComponent } from '../header/nav-bar/nav-bar.component';
import { HeaderService } from '../header/header.service';
import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [
        CardComponent,
        FooterComponent,
        HeaderComponent,
        NavBarComponent
    ],
    exports: [
        CardComponent,
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [
        HeaderService
    ]
})
export class LayoutModule { }
