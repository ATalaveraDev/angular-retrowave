import { Inject, Injectable, InjectionToken } from '@angular/core';

export const AUDIO_CONTEXT = new InjectionToken<BaseAudioContext>('Audio Context', {
  providedIn: 'root',
  factory: () => new BaseAudioContext()
});

export const AUDIO_NODE = new InjectionToken<AudioNode | null>('Audio Node', {
  factory: () => null
});

@Injectable({
  providedIn: 'root'
})
export class WebAudioApiService {

  constructor() { }
}
