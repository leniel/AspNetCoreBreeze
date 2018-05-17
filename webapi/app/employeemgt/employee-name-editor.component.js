import * as tslib_1 from "tslib";
import { Component, ElementRef, Input } from '@angular/core';
import { ModalDialog } from '../shared/controls/modal-dialog';
import { Employee } from '../core/entities/entity-model';
var EmployeeNameEditorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EmployeeNameEditorComponent, _super);
    function EmployeeNameEditorComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.name = {};
        return _this;
    }
    EmployeeNameEditorComponent.prototype.show = function (parent, title) {
        this.title = title;
        this.name = {};
        if (this.model) {
            this.name = {
                firstName: this.model.firstName
            };
        }
        return this.showModal(parent);
    };
    Object.defineProperty(EmployeeNameEditorComponent.prototype, "canOk", {
        get: function () {
            return !!this.name.firstName;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeNameEditorComponent.prototype.ok = function () {
        this.returnModal(this.name);
    };
    EmployeeNameEditorComponent.prototype.cancel = function () {
        this.returnModal(null);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Employee)
    ], EmployeeNameEditorComponent.prototype, "model", void 0);
    EmployeeNameEditorComponent = tslib_1.__decorate([
        Component({
            selector: 'employee-name-editor',
            templateUrl: './employee-name-editor.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], EmployeeNameEditorComponent);
    return EmployeeNameEditorComponent;
}(ModalDialog));
export { EmployeeNameEditorComponent };
//# sourceMappingURL=employee-name-editor.component.js.map