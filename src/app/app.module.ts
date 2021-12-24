import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HighlightTextDirective } from './directives/highlight-text.directive';
import { RendererHighlightDirective } from './directives/renderer-highlight.directive';
import { InputDirective } from './directives/input.directive';
import { HostBindingDirective } from './directives/host-binding.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HighlightTextDirective,
    RendererHighlightDirective,InputDirective,HostBindingDirective
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
