import { EntityQuery, FetchStrategy } from 'breeze-client';
var Repository = /** @class */ (function () {
    function Repository(_manager, _entityTypeName, _resourceName, _isCachedBundle) {
        if (_isCachedBundle === void 0) { _isCachedBundle = false; }
        this._manager = _manager;
        this._entityTypeName = _entityTypeName;
        this._resourceName = _resourceName;
        this._isCachedBundle = _isCachedBundle;
        this._defaultFetchStrategy = _isCachedBundle ? FetchStrategy.FromLocalCache : FetchStrategy.FromServer;
    }
    Object.defineProperty(Repository.prototype, "manager", {
        get: function () {
            if (this._resourceNameSet) {
                return this._manager;
            }
            var metadataStore = this._manager.metadataStore;
            var entityType = metadataStore.getEntityType(this._entityTypeName || '', true);
            if (entityType) {
                entityType.setProperties({ defaultResourceName: this.localResourceName });
                metadataStore.setEntityTypeForResourceName(this.localResourceName, entityType);
            }
            return this._manager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "localResourceName", {
        get: function () {
            return this._isCachedBundle ? this._entityTypeName : this._resourceName;
        },
        enumerable: true,
        configurable: true
    });
    Repository.prototype.withId = function (key) {
        if (!this._entityTypeName) {
            throw new Error('Repository must be created with an entity type specified');
        }
        return this.manager.fetchEntityByKey(this._entityTypeName, key, true)
            .then(function (data) {
            return data.entity;
        }).catch(function (e) {
            if (e.status == 404) {
                return null;
            }
            // Something else happened
            throw e;
        });
    };
    Repository.prototype.where = function (predicate) {
        var query = this.baseQuery().where(predicate);
        return this.executeQuery(query);
    };
    Repository.prototype.whereInCache = function (predicate) {
        var query = this.baseQuery().where(predicate);
        return this.executeCacheQuery(query);
    };
    Repository.prototype.all = function () {
        var query = this.baseQuery();
        return this.executeQuery(query);
    };
    Repository.prototype.baseQuery = function () {
        return EntityQuery.from(this.localResourceName);
    };
    Repository.prototype.executeQuery = function (query, fetchStrategy) {
        var q = query.using(fetchStrategy || this._defaultFetchStrategy);
        return this.manager.executeQuery(q).then(function (data) {
            return data.results;
        }).catch(function (e) {
            if (e.status == 404) {
                return [];
            }
            // Something else happend, rethrow the exception
            throw e;
        });
    };
    Repository.prototype.executeCacheQuery = function (query) {
        return this.manager.executeQueryLocally(query);
    };
    return Repository;
}());
export { Repository };
//# sourceMappingURL=repository.js.map