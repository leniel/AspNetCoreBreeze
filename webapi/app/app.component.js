import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        // Scrollbar modal dialog fix
        // If you have a modal on your page that exceeds the browser height,
        // then you can't scroll in it when closing an second modal.
        // from: http://stackoverflow.com/questions/19305821/multiple-modals-overlay
        $(document).on('hidden.bs.modal', '.modal', function () {
            $('.modal:visible').length && $(document.body).addClass('modal-open');
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'my-app',
            templateUrl: './app.html'
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map