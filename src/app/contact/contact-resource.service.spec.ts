import { TestBed } from '@angular/core/testing';

import { ContactResourceService } from './contact-resource.service';

describe('ContactResourceService', () => {
  let service: ContactResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
