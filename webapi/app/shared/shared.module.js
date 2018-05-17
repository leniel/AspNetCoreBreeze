import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabContainer } from './controls/tab-container.component';
import { TabPane } from './controls/tab-pane.directive';
import { NewLineDirective, ScrollToTopDirective } from './directives/common';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [
                NewLineDirective,
                TabContainer,
                TabPane,
                ScrollToTopDirective
            ],
            exports: [
                NewLineDirective,
                TabContainer,
                TabPane,
                ScrollToTopDirective
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=shared.module.js.map