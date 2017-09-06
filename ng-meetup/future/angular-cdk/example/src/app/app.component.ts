import { Component } from '@angular/core';

import { InterstitialService } from './interstitial/interstitial.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private interstitialService: InterstitialService) { }

  ngOnInit() {
    this.interstitialService.show();
  }

}
