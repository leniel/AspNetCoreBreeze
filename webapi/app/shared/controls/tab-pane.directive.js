import * as tslib_1 from "tslib";
import { ContentChild, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
var TabPane = /** @class */ (function () {
    function TabPane(viewContainer, templateRef) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.hasData = true;
        this.canDeactivate = true;
        this._active = false;
    }
    Object.defineProperty(TabPane.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (active) {
            if (active == this._active) {
                return;
            }
            this._active = active;
            if (active) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.remove(0);
            }
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TabPane.prototype, "title", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TabPane.prototype, "hasData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TabPane.prototype, "canDeactivate", void 0);
    tslib_1.__decorate([
        ContentChild('self'),
        tslib_1.__metadata("design:type", Object)
    ], TabPane.prototype, "component", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TabPane.prototype, "active", null);
    TabPane = tslib_1.__decorate([
        Directive({
            selector: '[tab-pane]'
        }),
        tslib_1.__metadata("design:paramtypes", [ViewContainerRef,
            TemplateRef])
    ], TabPane);
    return TabPane;
}());
export { TabPane };
//# sourceMappingURL=tab-pane.directive.js.map