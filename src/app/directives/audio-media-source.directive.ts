import { Directive, ElementRef, forwardRef, Inject, OnDestroy } from '@angular/core';
import { AUDIO_CONTEXT, AUDIO_NODE } from '../services/web-audio-api.service';

@Directive({
  selector: 'audio[rwMediaElementAudioSourceNode]',
  exportAs: 'AudioNode',
  providers: [{
    provide: AUDIO_NODE,
    useExisting: forwardRef(() => AudioMediaSourceDirective)
  }]
})
export class AudioMediaSourceDirective extends MediaElementAudioSourceNode implements OnDestroy {

  constructor(@Inject(AUDIO_CONTEXT) context: AudioContext, @Inject(ElementRef) { nativeElement }: ElementRef<HTMLMediaElement>) {
    super(context, { mediaElement: nativeElement });
  }

  ngOnDestroy(): void {
    this.disconnect();
  }

}
