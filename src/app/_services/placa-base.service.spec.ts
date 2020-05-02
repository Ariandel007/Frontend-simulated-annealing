/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlacaBaseService } from './placa-base.service';

describe('Service: PlacaBase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlacaBaseService]
    });
  });

  it('should ...', inject([PlacaBaseService], (service: PlacaBaseService) => {
    expect(service).toBeTruthy();
  }));
});
