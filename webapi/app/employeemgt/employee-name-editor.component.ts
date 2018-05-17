import { Component, ElementRef, Input } from '@angular/core';

import { ModalDialog } from '../shared/controls/modal-dialog';

import { Employee } from '../core/entities/entity-model';

export interface Name {
    firstName?: string;
}

@Component({
    selector: 'employee-name-editor',
    templateUrl: './employee-name-editor.html'
})
export class EmployeeNameEditorComponent extends ModalDialog<Name> {

    @Input() model: Employee;

    title: string;
    name: Name = {};

    constructor(elementRef: ElementRef) {
        super(elementRef);
    }

    show(parent: any, title: string) {
        this.title = title;
        this.name = {};
        if (this.model) {
            this.name = {
                firstName: this.model.firstName
            };
        }

        return this.showModal(parent);
    }

    get canOk(): boolean {
        return !!this.name.firstName;
    }

    ok() {
        this.returnModal(this.name);
    }

    cancel() {
        this.returnModal(null);
    }
}
