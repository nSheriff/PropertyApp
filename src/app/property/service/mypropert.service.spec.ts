import { TestBed, inject } from '@angular/core/testing';

import { MypropertService } from './mypropert.service';

describe('MypropertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MypropertService]
    });
  });

  it('should be created', inject([MypropertService], (service: MypropertService) => {
    expect(service).toBeTruthy();
  }));
});
