var ModalDialog = /** @class */ (function () {
    function ModalDialog(elementRef) {
        this.elementRef = elementRef;
    }
    ModalDialog.prototype.showModal = function (parent, validateFn) {
        var _this = this;
        var ele = this.elementRef.nativeElement.firstElementChild;
        var modalEle = jQuery(ele);
        this.modalParent = parent;
        this.validationMessage = null;
        if (validateFn) {
            this.validationFn = validateFn.bind(parent);
        }
        var p = new Promise(function (resolve, reject) {
            modalEle.modal({ backdrop: 'static', keyboard: false }).on('hidden.bs.modal', function () {
                resolve(_this.modalResult);
            });
        });
        return p;
    };
    ModalDialog.prototype.returnModal = function (result) {
        if (result != null && this.validationFn) {
            this.validationMessage = this.validationFn(result);
            if (this.validationMessage != null) {
                return;
            }
        }
        this.modalResult = result;
        this.hideModal();
    };
    ModalDialog.prototype.hideModal = function () {
        var ele = this.elementRef.nativeElement.firstElementChild;
        var modalEle = jQuery(ele);
        modalEle.modal('hide');
    };
    return ModalDialog;
}());
export { ModalDialog };
//# sourceMappingURL=modal-dialog.js.map