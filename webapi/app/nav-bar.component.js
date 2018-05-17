import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService, BusyService } from './core/services/common';
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(busyService, authService) {
        this.busyService = busyService;
        this.authService = authService;
        this.routes = [
            { title: 'Home', routerLink: ['/home'] },
            { title: 'Resource Management', routerLink: ['/resourcemgt'] }
        ];
    }
    NavBarComponent.prototype.logout = function () {
        this.authService.logout().then(function () {
            document.location.reload();
        });
    };
    NavBarComponent = tslib_1.__decorate([
        Component({
            selector: 'nav-bar',
            templateUrl: './nav-bar.html'
        }),
        tslib_1.__metadata("design:paramtypes", [BusyService, AuthService])
    ], NavBarComponent);
    return NavBarComponent;
}());
export { NavBarComponent };
//# sourceMappingURL=nav-bar.component.js.map