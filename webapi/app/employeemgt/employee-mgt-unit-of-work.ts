import { Injectable } from '@angular/core';
import { Entity, EntityManager, FilterQueryOp, Predicate } from 'breeze-client';

import { EntityFactory, EntityManagerProvider, IEntityFactory, IRepository, UnitOfWork } from '../core/services/common';

import { Employee } from '../core/entities/entity-model';

export interface Employee {
    id: string;
    firstName: string;
    address1: string;
    address2: string;
}

export class EmployeeFactory extends EntityFactory<Employee> {

    constructor(manager: EntityManager) {
        super('Employee', manager);
    }
}

@Injectable()
export class EmployeeMgtUnitOfWork extends UnitOfWork {

    employee: IRepository<Employee>;

    constructor(emProvider: EntityManagerProvider) {
        super(emProvider);
        this.employee = this.createRepository<Employee>(null, 'resourcemgt/employee');
    }
}
