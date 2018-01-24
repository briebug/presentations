import { Component, OnDestroy } from '@angular/core';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-breakpoint-example',
  template: `
    <p>Is mobile: {{isMobile}}</p>
  `,
  styles: []
})
export class BreakpointExampleComponent implements OnDestroy {

  isMobile: boolean;

  observerSubscription: Subscription;

  constructor(breakpointObserver: BreakpointObserver) {
    this.observerSubscription = breakpointObserver.observe([Breakpoints.Web])
      .subscribe((result: BreakpointState) => {
        this.isMobile = !result.matches;
        // Do something else...
      });
  }

  ngOnDestroy() {
    this.observerSubscription.unsubscribe();
  }

}
