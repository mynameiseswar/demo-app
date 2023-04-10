import { TestBed } from '@angular/core/testing';

import { CanactiveService } from './canactive.service';

describe('CanactiveService', () => {
  let service: CanactiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanactiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
