import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpColdComponent } from './http-cold/http-cold.component';
import { HttpHotComponent } from './http-hot/http-hot.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpColdComponent,
    HttpHotComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
