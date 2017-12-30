import { TestBed, inject } from '@angular/core/testing';

import { EstadoCivilService } from './estado-civil.service';

describe('EstadoCivilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstadoCivilService]
    });
  });

  it('should be created', inject([EstadoCivilService], (service: EstadoCivilService) => {
    expect(service).toBeTruthy();
  }));
});
