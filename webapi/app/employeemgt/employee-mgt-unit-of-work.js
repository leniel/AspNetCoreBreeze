import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { EntityFactory, EntityManagerProvider, UnitOfWork } from '../core/services/common';
var EmployeeFactory = /** @class */ (function (_super) {
    tslib_1.__extends(EmployeeFactory, _super);
    function EmployeeFactory(manager) {
        return _super.call(this, 'Employee', manager) || this;
    }
    return EmployeeFactory;
}(EntityFactory));
export { EmployeeFactory };
var EmployeeMgtUnitOfWork = /** @class */ (function (_super) {
    tslib_1.__extends(EmployeeMgtUnitOfWork, _super);
    function EmployeeMgtUnitOfWork(emProvider) {
        var _this = _super.call(this, emProvider) || this;
        _this.employee = _this.createRepository(null, 'resourcemgt/employee');
        return _this;
    }
    EmployeeMgtUnitOfWork = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [EntityManagerProvider])
    ], EmployeeMgtUnitOfWork);
    return EmployeeMgtUnitOfWork;
}(UnitOfWork));
export { EmployeeMgtUnitOfWork };
//# sourceMappingURL=employee-mgt-unit-of-work.js.map