import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlackjackComponent } from './blackjack.component';

const blackjackRoutes: Routes = [
    {
        component: BlackjackComponent,
        path: 'blackjack'
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(blackjackRoutes);
