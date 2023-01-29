import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BaseComponent } from './base.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Component({
    selector: 'app-issue',
    standalone: true,
    imports: [CommonModule, MatDialogModule, ReactiveFormsModule],
    template: `<h2 mat-dialog-title>Install Angular</h2>
        <mat-dialog-content class="mat-typography">
            <h3>This a form</h3>
            <p>Here is where some form fields might go.</p>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button (click)="close()">Cancel</button>
            <button mat-button (click)="save()">Save</button>
        </mat-dialog-actions> `,
    styleUrls: [],
})
export class IssueComponent extends BaseComponent<Issue> {
    private _form = new FormGroup({});

    public get form(): FormGroup<any> {
        return this._form;
    }

    constructor(dialog: MatDialogRef<IssueComponent>) {
        super(dialog);
    }

    public submit(): Observable<Issue> {
        // 1. create the DTO from the FormGroup
        // 2. submit the DTO through some service
        return of({} as Issue).pipe(delay(1500));
    }
}

interface Issue {}
