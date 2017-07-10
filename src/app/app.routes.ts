import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'homegi'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);