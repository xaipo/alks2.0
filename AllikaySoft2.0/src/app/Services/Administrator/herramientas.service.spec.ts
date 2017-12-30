import { TestBed, inject } from '@angular/core/testing';

import { HerramientasService } from './herramientas.service';

describe('HerramientasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HerramientasService]
    });
  });

  it('should be created', inject([HerramientasService], (service: HerramientasService) => {
    expect(service).toBeTruthy();
  }));
});
