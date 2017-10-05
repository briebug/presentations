import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterstitialContainerComponent } from './interstitial/interstitial-container.component';
import { InterstitialService } from './interstitial/interstitial.service';

@NgModule({
  declarations: [
    AppComponent,
    InterstitialContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [InterstitialService],
  entryComponents: [InterstitialContainerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
