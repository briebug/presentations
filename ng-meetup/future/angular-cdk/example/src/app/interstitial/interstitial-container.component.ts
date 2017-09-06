import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-interstitial-container',
  templateUrl: './interstitial-container.component.html',
  styleUrls: ['./interstitial-container.component.css']
})
export class InterstitialContainerComponent {

  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

}
