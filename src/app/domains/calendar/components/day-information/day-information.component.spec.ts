import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayInformationComponent } from './day-information.component';

describe('DayInformationComponent', () => {
  let component: DayInformationComponent;
  let fixture: ComponentFixture<DayInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DayInformationComponent]
    });
    fixture = TestBed.createComponent(DayInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
