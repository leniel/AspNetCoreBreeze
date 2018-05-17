import * as tslib_1 from "tslib";
import { Component, Injectable } from '@angular/core';
var DialogService = /** @class */ (function () {
    function DialogService() {
    }
    DialogService.prototype.messageBox = function (title, message, buttonNames) {
        var _this = this;
        delete this._result;
        this.title = title;
        this.message = message;
        this.buttonNames = buttonNames || ['Ok', 'Cancel'];
        var el = this.getModalElement();
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                el.modal({ backdrop: 'static', keyboard: false }).on('hidden.bs.modal', function () {
                    resolve(_this._result);
                });
            });
        });
    };
    DialogService.prototype.select = function (button) {
        this._result = button;
        this.getModalElement().modal('hide');
    };
    DialogService.prototype.getModalElement = function () {
        return $('#message-box-modal');
    };
    DialogService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], DialogService);
    return DialogService;
}());
export { DialogService };
var MessageBoxComponent = /** @class */ (function () {
    function MessageBoxComponent(service) {
        this.service = service;
    }
    MessageBoxComponent = tslib_1.__decorate([
        Component({
            selector: 'message-box',
            templateUrl: './message-box.html'
        }),
        tslib_1.__metadata("design:paramtypes", [DialogService])
    ], MessageBoxComponent);
    return MessageBoxComponent;
}());
export { MessageBoxComponent };
//# sourceMappingURL=dialog.service.js.map