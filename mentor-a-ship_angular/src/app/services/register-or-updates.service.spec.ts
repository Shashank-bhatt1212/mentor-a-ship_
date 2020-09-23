import { TestBed } from '@angular/core/testing';

import { RegisterOrUpdatesService } from './register-or-updates.service';

describe('RegisterOrUpdatesService', () => {
  let service: RegisterOrUpdatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterOrUpdatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
