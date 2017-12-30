import { TestBed, inject } from '@angular/core/testing';

import { PuestoTrabajoService } from './puesto-trabajo.service';

describe('PuestoTrabajoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PuestoTrabajoService]
    });
  });

  it('should be created', inject([PuestoTrabajoService], (service: PuestoTrabajoService) => {
    expect(service).toBeTruthy();
  }));
});
