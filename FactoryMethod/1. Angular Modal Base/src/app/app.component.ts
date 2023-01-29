import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IssueComponent } from './modals/issue.component';

@Component({
    selector: 'app-root',
    template: `<button mat-button (click)="openDialog()">Open dialog</button>`,
    styleUrls: ['./app.component.sass'],
})
export class AppComponent {
    constructor(public dialog: MatDialog) {}

    public openDialog() {
        const dialogRef = this.dialog.open(IssueComponent);

        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
