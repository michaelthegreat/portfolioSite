import { TestBed } from '@angular/core/testing';

import { AppLayoutFacadeService } from './app-layout-facade.service';

describe('AppLayoutFacadeService', () => {
  let service: AppLayoutFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppLayoutFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
