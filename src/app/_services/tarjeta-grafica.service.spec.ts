/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TarjetaGraficaService } from './tarjeta-grafica.service';

describe('Service: TarjetaGrafica', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TarjetaGraficaService]
    });
  });

  it('should ...', inject([TarjetaGraficaService], (service: TarjetaGraficaService) => {
    expect(service).toBeTruthy();
  }));
});
