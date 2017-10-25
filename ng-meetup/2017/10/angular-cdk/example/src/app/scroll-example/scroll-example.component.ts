import { Component, ElementRef, ViewChild } from '@angular/core';
import { Scrollable, ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-scroll-example',
  template: `
    <div class="container" cdkScrollable #container>
      <div class="inner" #inner></div>
    </div>
  `,
  styles: [`
    .container {
      height: 400px; width: 400px;
      border: solid;
      overflow: scroll;
    }
    .inner {
      height: 10000px;
      background-color: black;
      opacity: 0;
    }
  `]
})
export class ScrollExampleComponent {

  @ViewChild('container') container: ElementRef;
  @ViewChild('inner') inner: ElementRef;

  constructor(
    private scrollDispatcher: ScrollDispatcher
  ) {
    scrollDispatcher.scrolled(0, () => {
      this.inner.nativeElement.style.opacity = this.container.nativeElement.scrollTop / 10000;
    });
  }

}
