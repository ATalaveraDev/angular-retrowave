import { Directive, Inject, OnDestroy } from '@angular/core';

import { AUDIO_CONTEXT, AUDIO_NODE } from '../services/web-audio-api.service';

@Directive({
  selector: '[rwAudioDestionationNode]',
  exportAs: 'AudioNode'
})
export class RetroWaveAudioDestinationNodeDirective extends GainNode implements OnDestroy {
  constructor(@Inject(AUDIO_CONTEXT) context: AudioContext, @Inject(AUDIO_NODE) node: AudioNode | null) {
    super(context);
    this.connect(this.context.destination);

    if (node) {
      node.connect(this);
    }
  }

  ngOnDestroy(): void {
    this.disconnect();
  }
}
