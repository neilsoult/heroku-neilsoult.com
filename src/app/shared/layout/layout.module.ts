import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { NavBarComponent } from '../header/nav-bar/nav-bar.component';
import { HeaderService } from '../header/header.service';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        NavBarComponent
    ],
    exports: [
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
