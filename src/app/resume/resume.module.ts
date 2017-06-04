import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ResumeComponent } from './resume.component';
import { routing } from "./resume.routes";

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
