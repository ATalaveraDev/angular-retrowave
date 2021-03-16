import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GainNodeDirective } from './directives/gain-node.directive';
import { AudioDestinationNodeDirective } from './directives/audio-destination-node.directive';
import { AudioOutputDirectiveDirective } from './directives/audio-output-directive.directive';
import { AudioMediaSourceDirective } from './directives/audio-media-source.directive';
import { DelayNodeDirective } from './directives/delay-node.directive';

@NgModule({
  declarations: [
    AppComponent,
    GainNodeDirective,
    AudioDestinationNodeDirective,
    AudioOutputDirectiveDirective,
    AudioMediaSourceDirective,
    DelayNodeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
