import { TestBed } from '@angular/core/testing';

import { PutDataServiceService } from './put-data-service.service';

describe('PutDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PutDataServiceService = TestBed.get(PutDataServiceService);
    expect(service).toBeTruthy();
  });
});
