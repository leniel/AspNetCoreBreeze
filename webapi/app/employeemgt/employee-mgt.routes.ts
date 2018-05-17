import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterModule, Routes } from '@angular/router';

import { CanDeactivateGuard, PrepareGuard } from '../core/services/common';

import { EmployeeMgtComponent } from './employee-mgt.component';

export const resourceMgtRoutes: Routes = [
    {
        path: 'resourcemgt',
        component: EmployeeMgtComponent,
        canActivate: [PrepareGuard]
    },
    {
        path: 'resourcemgt',
        component: EmployeeMgtComponent,
        canActivate: [PrepareGuard]
    }
];

export const routing = RouterModule.forChild(resourceMgtRoutes);
