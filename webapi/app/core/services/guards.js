import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { EntityManagerProvider } from './entity-manager-provider';
var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    CanDeactivateGuard = tslib_1.__decorate([
        Injectable()
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());
export { CanDeactivateGuard };
var PrepareGuard = /** @class */ (function () {
    function PrepareGuard(entityManagerProvider, authService, router) {
        this.entityManagerProvider = entityManagerProvider;
        this.authService = authService;
        this.router = router;
    }
    PrepareGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.entityManagerProvider.prepare()
            .then(function () { return true; })
            .catch(function (e) {
            if (e.status == 401) {
                _this.authService.redirectUrl = state.url;
                _this.router.navigate(['/login']);
                return false;
            }
            // Something else happened
            throw e;
        });
    };
    PrepareGuard = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [EntityManagerProvider, AuthService, Router])
    ], PrepareGuard);
    return PrepareGuard;
}());
export { PrepareGuard };
//# sourceMappingURL=guards.js.map