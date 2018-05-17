import { RouterModule } from '@angular/router';
import { PrepareGuard } from '../core/services/common';
import { EmployeeMgtComponent } from './employee-mgt.component';
export var resourceMgtRoutes = [
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
export var routing = RouterModule.forChild(resourceMgtRoutes);
//# sourceMappingURL=employee-mgt.routes.js.map