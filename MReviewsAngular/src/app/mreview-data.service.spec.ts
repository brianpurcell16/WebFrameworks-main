import { TestBed } from '@angular/core/testing';

import { MReviewDataService } from './mreview-data.service';

describe('MReviewDataService', () => {
  let service: MReviewDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MReviewDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
