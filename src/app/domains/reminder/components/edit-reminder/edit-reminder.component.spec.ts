import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';

import { EditReminderComponent } from './edit-reminder.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
} from '@angular-material-components/datetime-picker';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('EditReminderComponent', () => {
    let component: EditReminderComponent;
    let fixture: ComponentFixture<EditReminderComponent>;
    let matDialogMock: jasmine.SpyObj<MatDialogRef<EditReminderComponent>> =
        jasmine.createSpyObj('MatDialogRef', ['close']);

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [EditReminderComponent],
            imports: [
                MatDialogModule,
                MatInputModule,
                FormsModule,
                ReactiveFormsModule,
                NgxMatTimepickerModule,
                NgxMatDatetimePickerModule,
                NgxMatNativeDateModule,
                NoopAnimationsModule,
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                {
                    provide: MatDialogRef<EditReminderComponent>,
                    useValue: matDialogMock,
                },
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {},
                },
            ],
        });
        fixture = TestBed.createComponent(EditReminderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should close the dialog', () => {
        component.close();
        expect(matDialogMock.close).toHaveBeenCalled();
    });

    it('should close the dialog with new reminder', () => {
        component.reminder = {
            id: '1',
            title: 'test',
            date: new Date(),
            description: 'test',
        };
        const formDate = new Date();
        component.reminderForm.setValue({
            title: 'test2',
            date: formDate,
            description: 'test',
        });
        component.save();
        expect(matDialogMock.close).toHaveBeenCalledWith({
            id: '1',
            title: 'test2',
            date: formDate,
            description: 'test',
        });
    });
});
