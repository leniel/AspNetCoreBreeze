import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { BusyService } from '../core/services/common';

import { EmployeeMgtUnitOfWork, Employee } from './employee-mgt-unit-of-work';
import { EmployeeNameEditorComponent } from './employee-name-editor.component';

@Component({
    templateUrl: './employee-mgt.html'
})
export class EmployeeMgtComponent implements OnInit, OnDestroy {

    @ViewChild(EmployeeNameEditorComponent) nameEditor: EmployeeNameEditorComponent;

    employees: Employee[];
    employeeId: string;

    private committedSub: Subscription;

    constructor(private unitOfWork: EmployeeMgtUnitOfWork, private busyService: BusyService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        if (this.route.firstChild) {
            this.route.firstChild.params.forEach(params => {
                this.employeeId = params.id;
                this.scrollIntoView();
            });
        }

        this.committedSub = EmployeeMgtUnitOfWork.committed.subscribe(() => {
            this.loadList();
        });
        this.loadList();
    }

    ngOnDestroy() {
        this.committedSub.unsubscribe();
    }

    onSelect(employee: Employee) {
        this.router.navigate(['/resourcemgt', employee.id]);
    }

    beginNew() {
        this.nameEditor.show(this, 'New Employee name').then(name => {
            if (name) {
                this.router.navigate(['/resourcemgt/new', name]);
            }
        });
    }

    private loadList() {
        return this.busyService.busy(this.unitOfWork.employee.all()
            .then(data => {
                this.employees = data;
                if (!this.employeeId && data.length > 0) {
                    this.router.navigate(['/resourcemgt', data[0].id]);
                }
                return data;
            }));
    }

    private scrollIntoView() {
        // Scroll selected item into view
        setTimeout(() => {
            const container = $('#search-result');
            const scrollTo = $('#search-result .info');
            if (scrollTo.length) {
                const scrollTop = scrollTo.offset().top - container.offset().top + container.scrollTop();
                if (scrollTop > container.scrollTop() + container.height()) {
                    container.animate({
                        scrollTop
                    });
                }
            }
        });
    }
}
