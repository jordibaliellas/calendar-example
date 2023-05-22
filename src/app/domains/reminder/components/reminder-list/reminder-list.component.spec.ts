import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReminderListComponent } from './reminder-list.component';
import { StoreModule } from '@ngrx/store';

describe('ReminderListComponent', () => {
    let component: ReminderListComponent;
    let fixture: ComponentFixture<ReminderListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ReminderListComponent],
            imports: [StoreModule.forRoot({}), MatDialogModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [{ provider: MatDialog, useValue: {} }],
        });
        fixture = TestBed.createComponent(ReminderListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
