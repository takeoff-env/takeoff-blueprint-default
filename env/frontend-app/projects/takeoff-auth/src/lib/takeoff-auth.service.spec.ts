import { TestBed } from '@angular/core/testing';

import { TakeoffAuthService } from './takeoff-auth.service';

describe('TakeoffAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TakeoffAuthService = TestBed.get(TakeoffAuthService);
    expect(service).toBeTruthy();
  });
});
