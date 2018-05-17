import * as tslib_1 from "tslib";
import { Directive } from '@angular/core';
var ScrollToTopDirective = /** @class */ (function () {
    function ScrollToTopDirective() {
    }
    ScrollToTopDirective.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    ScrollToTopDirective = tslib_1.__decorate([
        Directive({
            selector: '[scrollToTop]'
        })
    ], ScrollToTopDirective);
    return ScrollToTopDirective;
}());
export { ScrollToTopDirective };
//# sourceMappingURL=scroll-to-top.directive.js.map