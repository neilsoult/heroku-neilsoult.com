import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { XkcdComponent } from './xkcd.component';

const xkcdRoutes: Routes = [
    {
        component: XkcdComponent,
        path: 'xkcd'
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(xkcdRoutes);
