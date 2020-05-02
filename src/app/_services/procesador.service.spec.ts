/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProcesadorService } from './procesador.service';

describe('Service: Procesador', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcesadorService]
    });
  });

  it('should ...', inject([ProcesadorService], (service: ProcesadorService) => {
    expect(service).toBeTruthy();
  }));
});
