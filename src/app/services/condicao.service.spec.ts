import { TestBed } from '@angular/core/testing';

import { CondicaoService } from './condicao.service';

describe('CondicaoService', () => {
  let service: CondicaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondicaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
