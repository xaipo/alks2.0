import { TestBed, inject } from '@angular/core/testing';

import { NivelEstudioService } from './nivel-estudio.service';

describe('NivelEstudioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NivelEstudioService]
    });
  });

  it('should be created', inject([NivelEstudioService], (service: NivelEstudioService) => {
    expect(service).toBeTruthy();
  }));
});
