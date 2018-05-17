import { Employee } from './employee';
var RegistrationHelper = /** @class */ (function () {
    function RegistrationHelper() {
    }
    RegistrationHelper.register = function (metadataStore) {
        metadataStore.registerEntityTypeCtor('Employee', Employee, Employee.initializer);
    };
    return RegistrationHelper;
}());
export { RegistrationHelper };
//# sourceMappingURL=registration-helper.js.map