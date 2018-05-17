import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
// A directive that replaces \n with <br>
//
// Example:
//
// <div [newLine]="textWithNewLines"></div>
var NewLineDirective = /** @class */ (function () {
    function NewLineDirective(_el) {
        this._el = _el;
    }
    NewLineDirective.prototype.ngOnChanges = function (changes) {
        var val = (this.newLine || '').replace(/\n/g, '<br>');
        this._el.nativeElement.innerHTML = val;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NewLineDirective.prototype, "newLine", void 0);
    NewLineDirective = tslib_1.__decorate([
        Directive({
            selector: '[newLine]'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], NewLineDirective);
    return NewLineDirective;
}());
export { NewLineDirective };
//# sourceMappingURL=new-line.directive.js.map