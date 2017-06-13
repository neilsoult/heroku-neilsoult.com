import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LifeComponent } from './life.component';

const lifeRoutes: Routes = [
    {
        component: LifeComponent,
        path: 'life'
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(lifeRoutes);
