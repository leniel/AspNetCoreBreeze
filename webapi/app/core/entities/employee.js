import * as tslib_1 from "tslib";
import { core } from 'breeze-client';
import { EntityBase } from './entity-base';
/// </code-import>
var Employee = /** @class */ (function (_super) {
    tslib_1.__extends(Employee, _super);
    /// <code> Place custom code between <code> tags
    function Employee() {
        var _this = _super.call(this) || this;
        _this.id = core.getUuid();
        return _this;
    }
    /// [Initializer]
    Employee.initializer = function (entity) { };
    return Employee;
}(EntityBase));
export { Employee };
//# sourceMappingURL=employee.js.map