import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FrasesComponent } from './frases/frases.component';
import { BiscoitoComponent } from './biscoito/biscoito.component';

@NgModule({
  declarations: [
    AppComponent,
    FrasesComponent,
    BiscoitoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
