import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusyService } from '../core/services/common';
import { EmployeeMgtUnitOfWork } from './employee-mgt-unit-of-work';
import { EmployeeNameEditorComponent } from './employee-name-editor.component';
var EmployeeMgtComponent = /** @class */ (function () {
    function EmployeeMgtComponent(unitOfWork, busyService, router, route) {
        this.unitOfWork = unitOfWork;
        this.busyService = busyService;
        this.router = router;
        this.route = route;
    }
    EmployeeMgtComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.firstChild) {
            this.route.firstChild.params.forEach(function (params) {
                _this.employeeId = params.id;
                _this.scrollIntoView();
            });
        }
        this.committedSub = EmployeeMgtUnitOfWork.committed.subscribe(function () {
            _this.loadList();
        });
        this.loadList();
    };
    EmployeeMgtComponent.prototype.ngOnDestroy = function () {
        this.committedSub.unsubscribe();
    };
    EmployeeMgtComponent.prototype.onSelect = function (employee) {
        this.router.navigate(['/resourcemgt', employee.id]);
    };
    EmployeeMgtComponent.prototype.beginNew = function () {
        var _this = this;
        this.nameEditor.show(this, 'New Employee name').then(function (name) {
            if (name) {
                _this.router.navigate(['/resourcemgt/new', name]);
            }
        });
    };
    EmployeeMgtComponent.prototype.loadList = function () {
        var _this = this;
        return this.busyService.busy(this.unitOfWork.employee.all()
            .then(function (data) {
            _this.employees = data;
            if (!_this.employeeId && data.length > 0) {
                _this.router.navigate(['/resourcemgt', data[0].id]);
            }
            return data;
        }));
    };
    EmployeeMgtComponent.prototype.scrollIntoView = function () {
        // Scroll selected item into view
        setTimeout(function () {
            var container = $('#search-result');
            var scrollTo = $('#search-result .info');
            if (scrollTo.length) {
                var scrollTop = scrollTo.offset().top - container.offset().top + container.scrollTop();
                if (scrollTop > container.scrollTop() + container.height()) {
                    container.animate({
                        scrollTop: scrollTop
                    });
                }
            }
        });
    };
    tslib_1.__decorate([
        ViewChild(EmployeeNameEditorComponent),
        tslib_1.__metadata("design:type", EmployeeNameEditorComponent)
    ], EmployeeMgtComponent.prototype, "nameEditor", void 0);
    EmployeeMgtComponent = tslib_1.__decorate([
        Component({
            templateUrl: './employee-mgt.html'
        }),
        tslib_1.__metadata("design:paramtypes", [EmployeeMgtUnitOfWork, BusyService, Router, ActivatedRoute])
    ], EmployeeMgtComponent);
    return EmployeeMgtComponent;
}());
export { EmployeeMgtComponent };
//# sourceMappingURL=employee-mgt.component.js.map