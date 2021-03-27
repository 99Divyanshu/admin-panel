import { TestBed } from '@angular/core/testing';

import { MysericeService } from './myserice.service';

describe('MysericeService', () => {
  let service: MysericeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MysericeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
