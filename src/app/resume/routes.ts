import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumeComponent } from './component';

const resumeRoutes: Routes = [
    {
        component: ResumeComponent,
        path: 'resume'
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(resumeRoutes);