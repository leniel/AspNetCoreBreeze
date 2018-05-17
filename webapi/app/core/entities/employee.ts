import { core } from 'breeze-client';
import { EntityBase } from './entity-base';

/// </code-import>

export class Employee extends EntityBase {

    /// <code> Place custom code between <code> tags
    constructor() {
        super();
        this.id = core.getUuid();
    }

    /// [Initializer]
    static initializer(entity: Employee) { }
    /// </code>

    // Generated code. Do not place code below this line.
    id: string;
    firstName: string;
    zip: string;
    address1: string;
    address2: string;
}
