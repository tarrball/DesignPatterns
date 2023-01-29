import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

export abstract class BaseComponent<T> {
    public abstract get form(): FormGroup;

    public abstract submit(): Observable<T>;

    protected constructor(private dialog: MatDialogRef<BaseComponent<T>>) {}

    public close() {
        this.dialog.close();
    }

    public save() {
        if (!this.form.valid) {
            this.form.markAllAsTouched();

            return;
        }

        this.submit().subscribe({
            next: () => this.dialog.close(),
            error: () => {
                /* show modal error */
            },
        });
    }
}
