import { TestBed } from '@angular/core/testing';

import { DatabaseFilterService } from './database-filter.service';

describe('DatabaseFilterService', () => {
  let service: DatabaseFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
