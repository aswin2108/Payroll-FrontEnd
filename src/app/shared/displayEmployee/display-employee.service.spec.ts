import { TestBed } from '@angular/core/testing';

import { DisplayEmployeeService } from './display-employee.service';

describe('DisplayEmployeeService', () => {
  let service: DisplayEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
