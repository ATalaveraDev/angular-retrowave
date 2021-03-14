import { TestBed } from '@angular/core/testing';

import { WebAudioApiService } from './web-audio-api.service';

describe('WebAudioApiService', () => {
  let service: WebAudioApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebAudioApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
