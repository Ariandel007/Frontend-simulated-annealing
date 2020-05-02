/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DiscoService } from './disco.service';

describe('Service: Disco', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscoService]
    });
  });

  it('should ...', inject([DiscoService], (service: DiscoService) => {
    expect(service).toBeTruthy();
  }));
});
