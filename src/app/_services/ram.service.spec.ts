/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RamService } from './ram.service';

describe('Service: Ram', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RamService]
    });
  });

  it('should ...', inject([RamService], (service: RamService) => {
    expect(service).toBeTruthy();
  }));
});
