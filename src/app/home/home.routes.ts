import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
    {
        component: HomeComponent,
        path: 'home'
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(homeRoutes);
