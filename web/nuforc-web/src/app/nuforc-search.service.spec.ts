import { TestBed, inject } from '@angular/core/testing';

import { NuforcSearchService } from './nuforc-search.service';

describe('NuforcSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NuforcSearchService]
    });
  });

  it('should ...', inject([NuforcSearchService], (service: NuforcSearchService) => {
    expect(service).toBeTruthy();
  }));
});
