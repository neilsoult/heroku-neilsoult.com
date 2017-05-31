import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsComponent } from './component';

const cardsRoutes: Routes = [
    {
        component: CardsComponent,
        path: 'cards'
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(cardsRoutes);
