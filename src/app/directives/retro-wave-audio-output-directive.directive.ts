import { Directive, Inject, Input, OnDestroy } from '@angular/core';

import { AUDIO_CONTEXT, AUDIO_NODE } from '../services/web-audio-api.service';

@Directive({
  selector: '[waOutput]'
})
export class RetroWaveAudioOutputDirectiveDirective extends GainNode implements OnDestroy {
  @Input()
  set waOutput(destination: AudioNode | undefined) {
    this.disconnect();

    if (destination) {
      this.connect(destination);
    }
  }

  constructor(@Inject(AUDIO_CONTEXT) context: AudioContext, @Inject(AUDIO_NODE) node: AudioNode | null) {
    super(context);

    if (node) {
      node.connect(this);
    }
  }

  ngOnDestroy(): void {
    this.disconnect();
  }
}
