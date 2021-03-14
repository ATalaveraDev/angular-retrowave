import { Directive, forwardRef, Inject, Input, OnDestroy, SkipSelf } from '@angular/core';
import { AUDIO_CONTEXT, AUDIO_NODE } from '../services/web-audio-api.service';

@Directive({
  selector: '[rwGainNode]',
  inputs: [
    'channelCount',
    'channelCountMode',
    'channelInterpretation'
  ],
  exportAs: 'AudioNode',
  providers: [{
    provide: AUDIO_NODE,
    useExisting: forwardRef(() => RetroWaveGainNodeDirective)
  }]
})
export class RetroWaveGainNodeDirective extends GainNode implements OnDestroy {
  @Input('gain')
  set gainSetter(value: number) {
    this.gain.value = value;
  }

  constructor(@Inject(AUDIO_CONTEXT) context: AudioContext, @SkipSelf() @Inject(AUDIO_NODE) node: AudioNode | null) {
    super(context);

    if (node) {
      node.connect(this);
    }
  }

  ngOnDestroy(): void {
    this.disconnect();
  }
}
