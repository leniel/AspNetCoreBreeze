import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SaveOptions } from 'breeze-client';
import { Subject } from 'rxjs';
import { EntityManagerProvider } from './entity-manager-provider';
import { Repository } from './repository';
var EntityFactory = /** @class */ (function () {
    function EntityFactory(entityTypeName, manager) {
        this.entityTypeName = entityTypeName;
        this.manager = manager;
    }
    EntityFactory.prototype.create = function (config) {
        var inst = this.manager.createEntity(this.entityTypeName, config);
        return Promise.resolve(inst);
    };
    return EntityFactory;
}());
export { EntityFactory };
var SavedOrRejectedArgs = /** @class */ (function () {
    function SavedOrRejectedArgs() {
    }
    return SavedOrRejectedArgs;
}());
export { SavedOrRejectedArgs };
var UnitOfWork = /** @class */ (function () {
    function UnitOfWork(_emProvider) {
        this._emProvider = _emProvider;
        this.entityChangedSubject = new Subject();
    }
    UnitOfWork_1 = UnitOfWork;
    Object.defineProperty(UnitOfWork.prototype, "manager", {
        get: function () {
            var _this = this;
            if (!this._manager) {
                this._manager = this._emProvider.newManager();
                this._manager.entityChanged.subscribe(function (args) {
                    _this.entityChangedSubject.next(args);
                });
            }
            return this._manager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnitOfWork.prototype, "entityChanged", {
        get: function () {
            return this.entityChangedSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnitOfWork, "committed", {
        get: function () {
            return UnitOfWork_1.committedSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnitOfWork, "rejected", {
        get: function () {
            return UnitOfWork_1.rejectedSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UnitOfWork.prototype.hasChanges = function () {
        return this.manager.hasChanges();
    };
    UnitOfWork.prototype.getChanges = function () {
        return this.manager.getChanges();
    };
    UnitOfWork.prototype.commit = function () {
        var saveOptions = new SaveOptions({ resourceName: 'savechanges' });
        return this.manager.saveChanges(null, saveOptions)
            .then(function (saveResult) {
            UnitOfWork_1.committedSubject.next(saveResult.entities);
            return saveResult.entities;
        });
    };
    UnitOfWork.prototype.rollback = function () {
        var pendingChanges = this.manager.getChanges();
        this.manager.rejectChanges();
        UnitOfWork_1.rejectedSubject.next(pendingChanges);
    };
    UnitOfWork.prototype.clear = function () {
        this._emProvider.reset(this.manager);
    };
    UnitOfWork.prototype.shelve = function (key, clear) {
        if (clear === void 0) { clear = false; }
        var data = this.manager.exportEntities(null, { asString: false, includeMetadata: false });
        UnitOfWork_1.shelveSets[key] = data;
        if (clear) {
            this._emProvider.reset(this.manager);
        }
    };
    UnitOfWork.prototype.unshelve = function (key, clear) {
        if (clear === void 0) { clear = true; }
        var data = UnitOfWork_1.shelveSets[key];
        if (!data) {
            return false;
        }
        if (clear) {
            // Clear the entity manager and don't bother importing lookup data from masterManager.
            this.manager.clear();
        }
        this.manager.importEntities(data);
        // Delete the shelveSet
        delete UnitOfWork_1.shelveSets[key];
        return true;
    };
    UnitOfWork.deleteShelveSet = function (key) {
        delete UnitOfWork_1.shelveSets[key];
    };
    UnitOfWork.prototype.createRepository = function (entityTypeName, resourceName, isCached) {
        if (isCached === void 0) { isCached = false; }
        return new Repository(this.manager, entityTypeName, resourceName, isCached);
    };
    UnitOfWork.prototype.createFactory = function (entityTypeName) {
        return new EntityFactory(entityTypeName, this.manager);
    };
    UnitOfWork.shelveSets = {};
    UnitOfWork.committedSubject = new Subject();
    UnitOfWork.rejectedSubject = new Subject();
    UnitOfWork = UnitOfWork_1 = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [EntityManagerProvider])
    ], UnitOfWork);
    return UnitOfWork;
    var UnitOfWork_1;
}());
export { UnitOfWork };
//# sourceMappingURL=unit-of-work.js.map