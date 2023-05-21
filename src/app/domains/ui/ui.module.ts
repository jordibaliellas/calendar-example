import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [ConfirmDialogComponent],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
    ],
    exports: [ConfirmDialogComponent],
})
export class UiModule {}
