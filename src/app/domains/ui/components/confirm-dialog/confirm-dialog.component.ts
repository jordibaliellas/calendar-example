import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {
    constructor(
        public dialog: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public text: string,
    ) {}

    /**
     * Close the dialog with a false value
     */
    public close(): void {
        this.dialog.close(false);
    }

    /**
     * Close the dialog with a true value
     */
    public confirm(): void {
        this.dialog.close(true);
    }
}
