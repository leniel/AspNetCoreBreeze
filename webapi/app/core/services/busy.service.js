import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var BusyService = /** @class */ (function () {
    function BusyService() {
        this._busyCounter = 0;
    }
    Object.defineProperty(BusyService.prototype, "isBusy", {
        get: function () {
            return this._busyCounter > 0;
        },
        enumerable: true,
        configurable: true
    });
    BusyService.prototype.busy = function (op) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._busyCounter++;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, op];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        this._busyCounter--;
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BusyService = tslib_1.__decorate([
        Injectable()
    ], BusyService);
    return BusyService;
}());
export { BusyService };
//# sourceMappingURL=busy.service.js.map