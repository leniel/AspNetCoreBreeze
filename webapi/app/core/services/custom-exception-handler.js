import { ErrorHandler as ExceptionHandler } from '@angular/core';
import { ErrorHandler } from './error-handler';
export function CustomExceptionHandlerFactory(errorHandler) {
    var CustomExceptionHandler = /** @class */ (function () {
        function CustomExceptionHandler() {
        }
        CustomExceptionHandler.prototype.handleError = function (exception) {
            // Pass exception to error handler.
            var error = exception.rejection || exception.originalException || exception;
            errorHandler.error(error);
        };
        return CustomExceptionHandler;
    }());
    return new CustomExceptionHandler();
}
export var customExceptionHandlerProvider = {
    provide: ExceptionHandler,
    useFactory: CustomExceptionHandlerFactory,
    deps: [ErrorHandler]
};
//# sourceMappingURL=custom-exception-handler.js.map