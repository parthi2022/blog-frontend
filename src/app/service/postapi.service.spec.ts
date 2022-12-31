import { TestBed } from '@angular/core/testing';

import { PostapiService } from './postapi.service';

describe('PostapiService', () => {
  let service: PostapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
