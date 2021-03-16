import { Directive, forwardRef, Inject, Input, OnDestroy, SkipSelf } from "@angular/core";
import { AUDIO_CONTEXT, AUDIO_NODE } from "../services/web-audio-api.service";

@Directive({
  selector: '[rwDelayNode]',
  inputs: [
    'channelCount',
    'channelCountMode',
    'channelInterpretation'
  ],
  exportAs: 'AudioNode',
  providers: [{
    provide: AUDIO_NODE,
    useExisting: forwardRef(() => DelayNodeDirective)
  }]
})
export class DelayNodeDirective extends DelayNode implements OnDestroy {
  @Input('delayTime')
  set delaySetter(value: number) {
    this.delayTime.value = value;
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
