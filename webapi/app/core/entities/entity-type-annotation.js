var EntityTypeAnnotation = /** @class */ (function () {
    function EntityTypeAnnotation(args) {
        this.validators = args.validators || [];
        this.propertyAnnotations = args.propertyAnnotations || [];
        this.ignoreForSerialization = args.ignoreForSerialization || [];
    }
    return EntityTypeAnnotation;
}());
export { EntityTypeAnnotation };
var EntityPropertyAnnotation = /** @class */ (function () {
    function EntityPropertyAnnotation(propertyName, config) {
        this.propertyName = propertyName;
        this.displayName = config.displayName;
        this.validators = config.validators;
    }
    return EntityPropertyAnnotation;
}());
export { EntityPropertyAnnotation };
//# sourceMappingURL=entity-type-annotation.js.map