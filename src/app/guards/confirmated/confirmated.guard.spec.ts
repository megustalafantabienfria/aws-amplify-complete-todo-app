import { TestBed, async, inject } from '@angular/core/testing';

import { ConfirmatedGuard } from './confirmated.guard';

describe('ConfirmatedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmatedGuard]
    });
  });

  it('should ...', inject([ConfirmatedGuard], (guard: ConfirmatedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
