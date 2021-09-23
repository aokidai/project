import { TestBed } from '@angular/core/testing';

import { HeroSService } from './hero-s.service';

describe('HeroSService', () => {
  let service: HeroSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
