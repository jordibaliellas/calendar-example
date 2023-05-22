import { DateInformationService } from './date-information.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('DateInformationService', () => {
    let service: DateInformationService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(DateInformationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
