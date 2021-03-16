import { Directive, Inject, Input, OnDestroy } from '@angular/core';

import { AUDIO_CONTEXT, AUDIO_NODE } from '../services/web-audio-api.service';

@Directive({
  selector: '[rwOutput]'
})
export class AudioOutputDirectiveDirective extends GainNode implements OnDestroy {
  @Input()
  set rwOutput(destination: AudioNode | undefined) {
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
