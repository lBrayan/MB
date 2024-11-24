import { TestBed } from '@angular/core/testing';

import { PlateDetectionService } from './plate-detection.service';

describe('PlateDetectionService', () => {
  let service: PlateDetectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlateDetectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
