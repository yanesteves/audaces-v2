import { TestBed } from '@angular/core/testing';

import { Guarda1Guard } from './guarda1.guard';

describe('Guarda1Guard', () => {
  let guard: Guarda1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Guarda1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
