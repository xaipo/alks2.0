import { TestBed, inject } from '@angular/core/testing';

import { ProteccionService } from './proteccion.service';

describe('ProteccionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProteccionService]
    });
  });

  it('should be created', inject([ProteccionService], (service: ProteccionService) => {
    expect(service).toBeTruthy();
  }));
});
