import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthService, BusyService, CanDeactivateGuard, customExceptionHandlerProvider, DialogService, EntityManagerProvider, ErrorHandler, MessageBoxComponent, PrepareGuard, UnitOfWork } from './services/common';
// ATTENTION: Never import this module into a lazy loaded module. Only import into app module.
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule, SharedModule],
            declarations: [MessageBoxComponent],
            exports: [MessageBoxComponent],
            providers: [
                CanDeactivateGuard,
                PrepareGuard,
                ErrorHandler,
                EntityManagerProvider,
                DialogService,
                customExceptionHandlerProvider,
                BusyService,
                AuthService,
                UnitOfWork
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=core.module.js.map