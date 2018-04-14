import { TestBed, inject } from '@angular/core/testing';

import { ItemsProviderService } from './items-provider.service';

describe('ItemsProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsProviderService]
    });
  });

  it('should be created', inject([ItemsProviderService], (service: ItemsProviderService) => {
    expect(service).toBeTruthy();
  }));
});
