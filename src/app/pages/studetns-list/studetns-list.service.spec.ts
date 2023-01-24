import { TestBed } from '@angular/core/testing';

import { StudetnsListService } from './studetns-list.service';

describe('StudetnsListService', () => {
  let service: StudetnsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudetnsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
