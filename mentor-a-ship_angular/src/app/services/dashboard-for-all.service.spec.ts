import { TestBed } from '@angular/core/testing';

import { DashboardForAllService } from './dashboard-for-all.service';

describe('DashboardForAllService', () => {
  let service: DashboardForAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardForAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
