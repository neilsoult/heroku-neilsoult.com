import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ResumeComponent } from './component';
import { routing } from "./routes";

@NgModule({
    declarations: [
        ResumeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: []
})
export class ResumeModule { }
