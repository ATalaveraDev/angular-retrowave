import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RetroWaveGainNodeDirective } from './directives/retro-wave-gain-node.directive';
import { RetroWaveAudioDestinationNodeDirective } from './directives/retro-wave-audio-destination-node.directive';
import { RetroWaveAudioOutputDirectiveDirective } from './directives/retro-wave-audio-output-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    RetroWaveGainNodeDirective,
    RetroWaveAudioDestinationNodeDirective,
    RetroWaveAudioOutputDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
