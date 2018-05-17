import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { core } from 'breeze-client';
import get from 'lodash-es/get';
import { DialogService } from './dialog.service';
export var ErrorLevel;
(function (ErrorLevel) {
    ErrorLevel[ErrorLevel["Exception"] = 0] = "Exception";
    ErrorLevel[ErrorLevel["Info"] = 1] = "Info";
    ErrorLevel[ErrorLevel["Warning"] = 2] = "Warning";
})(ErrorLevel || (ErrorLevel = {}));
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler(dialogService) {
        this.dialogService = dialogService;
    }
    // Handles error and returns a rejected promise.
    ErrorHandler.prototype.error = function (e) {
        this.handle(e, ErrorLevel.Exception);
    };
    ErrorHandler.prototype.warning = function (e) {
        this.handle(e, ErrorLevel.Warning);
    };
    ErrorHandler.prototype.info = function (e) {
        this.handle(e, ErrorLevel.Info);
    };
    ErrorHandler.prototype.handle = function (e, errorLevel) {
        // Ignore error if it was already handled once.
        if (e.errorWasHandled) {
            return;
        }
        errorLevel = errorLevel || ErrorLevel.Exception;
        var message = typeof e === 'string' ? e : this.userFriendlyErrorMessage(e);
        var entityErrors = this.formatEntityErrors(e.entityErrors);
        if (entityErrors && entityErrors !== '') {
            message = message + "\n\n" + entityErrors;
        }
        var logId = core.getUuid();
        if (this.shouldLogError(e)) {
            message = message + "\n\nError ID: " + logId;
        }
        var title = this.errorTitle(e, errorLevel);
        var buttonsNames = this.getApplicableButtonNamesByError(e);
        this.dialogService.messageBox(title, message, buttonsNames).then(function (result) {
            if (result == 'Login') {
                document.location.reload();
            }
        });
        if (this.shouldLogError(e)) {
            var consoleMessage = title.toUpperCase() + ": " + message;
            if (errorLevel === ErrorLevel.Exception) {
                console.error(consoleMessage);
            }
            else if (errorLevel === ErrorLevel.Warning) {
                console.warn(consoleMessage);
            }
            else if (errorLevel === ErrorLevel.Info) {
                console.info(consoleMessage);
            }
            else {
                console.log(consoleMessage);
            }
        }
        // Mark error as handled
        e.errorWasHandled = true;
    };
    ErrorHandler.prototype.userFriendlyErrorMessage = function (e) {
        if (this.isHttpStatus(e, 401)) {
            e.message = 'You have been logged out due to inactivity. To continue, click on the Login button below and re-enter your credentials';
        }
        if (this.isHttpStatus(e, 500)) {
            e.message = 'An unexpected internal server error occured. Please try again later.';
        }
        if (e.entityErrors) {
            e.message = 'Please correct the following data issues and try again.';
        }
        return e.message || 'An unexpected error has occurred.';
    };
    ErrorHandler.prototype.getApplicableButtonNamesByError = function (e) {
        if (this.isHttpStatus(e, 401)) {
            return ['Login'];
        }
        return ['Ok']; // Return the default Ok button for most errors.
    };
    ErrorHandler.prototype.isHttpStatus = function (e, status) {
        return get(e, 'httpResponse.status', 200) == status;
    };
    ErrorHandler.prototype.shouldLogError = function (e) {
        if (this.isHttpStatus(e, 401)) {
            return false;
        }
        if (e.entityErrors) {
            return false;
        }
        return true;
    };
    ErrorHandler.prototype.formatEntityErrors = function (entityErrors) {
        var s = '';
        if (!entityErrors || !entityErrors.length) {
            return s;
        }
        entityErrors.forEach(function (ee) {
            s += "- " + ee.errorMessage + "\n";
        });
        return s.trim();
    };
    ErrorHandler.prototype.errorTitle = function (e, errorLevel) {
        if (e.entityErrors) {
            return 'Invalid Data';
        }
        switch (errorLevel) {
            case ErrorLevel.Exception:
                return 'Error';
            case ErrorLevel.Info:
                return 'Information';
            case ErrorLevel.Warning:
                return 'Warning';
        }
        return 'Message';
    };
    ErrorHandler = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [DialogService])
    ], ErrorHandler);
    return ErrorHandler;
}());
export { ErrorHandler };
//# sourceMappingURL=error-handler.js.map