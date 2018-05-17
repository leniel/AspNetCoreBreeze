import * as tslib_1 from "tslib";
import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { TabPane } from './tab-pane.directive';
var TabContainer = /** @class */ (function () {
    function TabContainer() {
        // add next line to any component that hosts a TabContainer in order to make the tabContainer available internally
        // only needed if you actually need to access that tabContainer programatically.
        //    @ViewChild(TabContainer) tabContainer: TabContainer;
        this.tabChange = new EventEmitter();
    }
    TabContainer.prototype.selectTab = function (pane) {
        var _this = this;
        var currentPane = this.getCurrentPane();
        if (currentPane) {
            var comp = currentPane.component;
            if (currentPane.canDeactivate === false) {
                return;
            }
            if (comp && comp.canDeactivate) {
                if (!comp.canDeactivate()) {
                    return;
                }
            }
            if (comp && comp.onDeactivate) {
                comp.onDeactivate();
            }
        }
        // wait a tick for panes array update before setting active pane
        setTimeout(function () {
            _this.currentPane = _this.panes.toArray()[pane];
            _this.panes.toArray()
                .forEach(function (p, i) { return p.active = i === pane; });
            _this.tabChange.emit(pane);
        }, 0);
    };
    TabContainer.prototype.getCurrentPane = function () {
        if (!this.currentPane && this.panes.length > 0) {
            this.currentPane = this.panes.toArray()[0];
        }
        return this.currentPane;
    };
    TabContainer.prototype.getCurrentComponent = function () {
        var pane = this.getCurrentPane();
        return (pane && pane.component);
    };
    tslib_1.__decorate([
        ContentChildren(TabPane),
        tslib_1.__metadata("design:type", QueryList)
    ], TabContainer.prototype, "panes", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TabContainer.prototype, "title", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TabContainer.prototype, "tabChange", void 0);
    TabContainer = tslib_1.__decorate([
        Component({
            selector: 'tab-container',
            template: "\n    <ul class=\"nav nav-tabs\">\n        <li *ngIf=\"title\"><h3 style=\"margin-top: 10px; margin-right: 50px; margin-bottom:5px;\">{{title}}</h3></li>\n        <li *ngFor=\"let pane of panes; let i = index\"\n            (click)=\"selectTab(i)\"\n            role=\"presentation\" [class.active]=\"pane.active\" [class.has-no-data]=\"pane.hasData == false\" >\n        <a href=\"javascript:void(0)\"><span>{{pane.title}}</span></a>\n        </li>\n    </ul>\n    <ng-content></ng-content>\n    "
        })
    ], TabContainer);
    return TabContainer;
}());
export { TabContainer };
//# sourceMappingURL=tab-container.component.js.map