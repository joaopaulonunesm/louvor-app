import { TestBed } from '@angular/core/testing';

import { RepertorioService } from './repertorio.service';

describe('RepertorioService', () => {
  let service: RepertorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepertorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
