import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { config, DataService, EntityManager, EntityQuery, NamingConvention } from 'breeze-client';
import includes from 'lodash-es/includes';
import remove from 'lodash-es/remove';
// Import required breeze adapters. Rollup.js requires the use of breeze.base.debug.js, which doesn't include
// the breeze adapters.
import 'breeze-client/breeze.dataService.webApi';
import 'breeze-client/breeze.modelLibrary.backingStore';
import 'breeze-client/breeze.uriBuilder.json';
import 'breeze-client/breeze.uriBuilder.odata';
import { RegistrationHelper } from '../entities/registration-helper';
// The EntityManagerProvider manages a static master manager and a per instance sandbox manager.
var EntityManagerProvider = /** @class */ (function () {
    function EntityManagerProvider() {
    }
    EntityManagerProvider_1 = EntityManagerProvider;
    EntityManagerProvider.prototype.prepare = function () {
        var _this = this;
        if (!EntityManagerProvider_1._preparePromise) {
            // Configure breeze adapaters. See rollup.js comment above
            config.initializeAdapterInstances({ dataService: 'webApi', uriBuilder: 'odata' });
            NamingConvention.camelCase.setAsDefault();
            var dsconfig = {
                serviceName: 'breeze'
            };
            if (location.port == '3000') {
                // Configure the json uriBuilder. See rollup.js comment above
                config.initializeAdapterInstance('uriBuilder', 'json', false);
                dsconfig.uriBuilderName = 'json'; // for breeze-sequelize server
            }
            var dataService = new DataService(dsconfig);
            var masterManager_1 = EntityManagerProvider_1._masterManager = new EntityManager({
                dataService: dataService
            });
            return EntityManagerProvider_1._preparePromise = masterManager_1.fetchMetadata().then(function () {
                RegistrationHelper.register(masterManager_1.metadataStore);
                _this.registerAnnotations(masterManager_1.metadataStore);
                // Load lockups
                var query = EntityQuery.from('lookups');
                return masterManager_1.executeQuery(query);
            }).catch(function (e) {
                // If there's an error, we need to ensure prepare can be called fresh
                EntityManagerProvider_1._preparePromise = null;
                throw e;
            });
        }
        return EntityManagerProvider_1._preparePromise;
    };
    EntityManagerProvider.prototype.reset = function (manager) {
        if (manager) {
            manager.clear();
            this.seedManager(manager);
        }
    };
    EntityManagerProvider.prototype.newManager = function () {
        var manager = EntityManagerProvider_1._masterManager.createEmptyCopy();
        this.seedManager(manager);
        return manager;
    };
    EntityManagerProvider.prototype.seedManager = function (manager) {
        manager.importEntities(EntityManagerProvider_1._masterManager.exportEntities(null, { asString: false, includeMetadata: false }));
    };
    EntityManagerProvider.prototype.registerAnnotations = function (metadataStore) {
        var _this = this;
        metadataStore.getEntityTypes().forEach(function (t) {
            var et = t;
            var ctor = et.getCtor();
            if (ctor && ctor.getEntityTypeAnnotation) {
                var etAnnotation = ctor.getEntityTypeAnnotation();
                (_a = et.validators).push.apply(_a, etAnnotation.validators);
                etAnnotation.propertyAnnotations.forEach(function (pa) {
                    var prop = et.getProperty(pa.propertyName);
                    (_a = prop.validators).push.apply(_a, pa.validators);
                    prop.displayName = pa.displayName;
                    var _a;
                });
                _this.ignoreForSerialization.apply(_this, [metadataStore, t].concat(etAnnotation.ignoreForSerialization));
            }
            var _a;
        });
    };
    EntityManagerProvider.prototype.ignoreForSerialization = function (metadataStore, typeInfo) {
        var _this = this;
        var propertyNames = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            propertyNames[_i - 2] = arguments[_i];
        }
        if (!propertyNames || propertyNames.length == 0) {
            return;
        }
        var entityType = typeof (typeInfo) === 'string' ? metadataStore.getEntityType(typeInfo) : typeInfo;
        // Recursivley walk the inheritance tree and ignore the same properties for all parent types
        var parentTypes = metadataStore.getEntityTypes().filter(function (type) {
            var parentType = type;
            return parentType.baseEntityType && parentType.baseEntityType === entityType;
        });
        parentTypes.forEach(function (parentType) { return _this.ignoreForSerialization.apply(_this, [metadataStore, parentType].concat(propertyNames)); });
        // Now ignore for current type
        var dps = propertyNames.map(function (propertyName) {
            var dp = entityType.getDataProperty(propertyName);
            if (!dp) {
                console.warn("No data property with name " + propertyName + " found in entity type " + entityType.shortName);
            }
            return dp;
        });
        // Get all the nulls out
        remove(dps, function (dp) { return !dp; });
        // Get existing ignored properties
        var ignoredProperties = entityType.$ignoredProperties;
        // Signals that we've already installed our custom serializerFn
        if (ignoredProperties) {
            remove(dps, function (dp) { return includes(ignoredProperties, dp); });
            ignoredProperties = ignoredProperties.concat(dps);
        }
        else {
            // First ignored properties for this entity type
            ignoredProperties = dps;
            var origSerializerFn_1 = entityType.serializerFn;
            entityType.setProperties({
                serializerFn: function (dp, value) {
                    if (includes(entityType.$ignoredProperties, dp)) {
                        // Return undefined if property is ignored for serialization
                        return undefined;
                    }
                    return origSerializerFn_1 ? origSerializerFn_1(dp, value) : value;
                }
            });
        }
        entityType.$ignoredProperties = ignoredProperties;
    };
    EntityManagerProvider = EntityManagerProvider_1 = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], EntityManagerProvider);
    return EntityManagerProvider;
    var EntityManagerProvider_1;
}());
export { EntityManagerProvider };
//# sourceMappingURL=entity-manager-provider.js.map