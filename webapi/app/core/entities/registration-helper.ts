import { MetadataStore } from 'breeze-client';

import { Employee } from './employee';

export class RegistrationHelper {

    static register(metadataStore: MetadataStore) {
        metadataStore.registerEntityTypeCtor('Employee', Employee, Employee.initializer);
    }
}
