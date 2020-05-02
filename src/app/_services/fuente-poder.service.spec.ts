/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FuentePoderService } from './fuente-poder.service';

describe('Service: FuentePoder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FuentePoderService]
    });
  });

  it('should ...', inject([FuentePoderService], (service: FuentePoderService) => {
    expect(service).toBeTruthy();
  }));
});
