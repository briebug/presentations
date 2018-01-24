import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterstitialContainerComponent } from './interstitial/interstitial-container.component';
import { InterstitialService } from './interstitial/interstitial.service';
import { ScrollExampleComponent } from './scroll-example/scroll-example.component';
import { BreakpointExampleComponent } from './breakpoint-example/breakpoint-example.component';

@NgModule({
  declarations: [
    AppComponent,
    InterstitialContainerComponent,
    ScrollExampleComponent,
    BreakpointExampleComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    ScrollDispatchModule,
    AppRoutingModule
  ],
  providers: [InterstitialService],
  entryComponents: [InterstitialContainerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
