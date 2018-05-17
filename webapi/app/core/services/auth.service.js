import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.loginUser = function (username, password) {
        var data = {
            username: username,
            password: password
        };
        return this.http.post('/breeze/account/login', data, { responseType: 'text' }).toPromise();
    };
    AuthService.prototype.logout = function () {
        return this.http.post('/breeze/account/logout', {}, { responseType: 'text' }).toPromise();
    };
    AuthService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map