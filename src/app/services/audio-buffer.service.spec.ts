import { TestBed } from '@angular/core/testing';

import { AudioBufferService } from './audio-buffer.service';

describe('AudioBufferService', () => {
  let service: AudioBufferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioBufferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
