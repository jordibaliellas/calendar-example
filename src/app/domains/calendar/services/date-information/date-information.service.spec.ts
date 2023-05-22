import { TestBed } from '@angular/core/testing';

import { DateInformationService } from './date-information.service';

describe('DateInformationService', () => {
  let service: DateInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
