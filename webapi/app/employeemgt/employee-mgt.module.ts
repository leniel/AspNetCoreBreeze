import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { EmployeeMgtComponent } from './employee-mgt.component';
import { EmployeeNameEditorComponent } from './employee-name-editor.component';

import { EmployeeMgtUnitOfWork } from './employee-mgt-unit-of-work';

import { routing } from './employee-mgt.routes';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        routing
    ],
    declarations: [
        EmployeeMgtComponent,
        EmployeeNameEditorComponent
    ],
    providers: [
        EmployeeMgtUnitOfWork  // The UoW used for the module
    ]
})
export class EmployeeMgtModule { }
