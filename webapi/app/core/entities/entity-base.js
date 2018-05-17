var EntityBase = /** @class */ (function () {
    function EntityBase() {
    }
    Object.defineProperty(EntityBase.prototype, "$typeName", {
        get: function () {
            if (!this.entityAspect) {
                return '';
            }
            return this.entityAspect.getKey().entityType.shortName;
        },
        enumerable: true,
        configurable: true
    });
    return EntityBase;
}());
export { EntityBase };
//# sourceMappingURL=entity-base.js.map