import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, DialogService } from './core/services/common';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, dialogService) {
        this.authService = authService;
        this.router = router;
        this.dialogService = dialogService;
        this.username = 'Admin';
        this.password = 'password';
    }
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        if (!this.isValid) {
            return;
        }
        this.authService.loginUser(this.username, this.password)
            .then(function () {
            _this.router.navigateByUrl(_this.authService.redirectUrl || '/');
        }).catch(function (e) {
            if (e.status == 401) {
                return _this.dialogService.messageBox('Unauthorized', 'Please verify your username and password and try again.', ['Ok']);
            }
            // Something else happened
            throw e;
        });
    };
    Object.defineProperty(LoginComponent.prototype, "isValid", {
        get: function () {
            return !!this.username && !!this.password;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent = tslib_1.__decorate([
        Component({
            templateUrl: './login.html'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router, DialogService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map