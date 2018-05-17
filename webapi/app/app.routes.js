import { RouterModule } from '@angular/router';
import { PrepareGuard } from './core/services/common';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
export var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [PrepareGuard]
    }
];
export var routing = RouterModule.forRoot(routes, { enableTracing: true, useHash: true });
//# sourceMappingURL=app.routes.js.map