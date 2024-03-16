import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { noramlGuard } from './noraml.guard';

describe('noramlGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => noramlGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
