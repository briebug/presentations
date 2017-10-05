import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  Injectable,
  Injector
} from '@angular/core';
import {
  ComponentType,
  Portal,
  ComponentPortal,
  DomPortalHost
} from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/platform-browser';

import { InterstitialContainerComponent } from './interstitial-container.component';

@Injectable()
export class InterstitialService {

  // 1. Reference to the Portal.
  // This is the portal to which the InterstialContainerComponent will be attached.
  private interstitialContainerPortal: ComponentPortal<InterstitialContainerComponent>;

  // 2. Reference to the PortalHost.
  // The DomPortalHost is a PortalHost for attaching portals to an arbitrary DOM
  // element outside of the Angular application context. In this service, the
  // component will be attached to document.body.
  private bodyPortalHost: DomPortalHost;

  // 3. Inject the document reference and the dependencies needed by the
  // DOMPortalHost constructor.
  constructor(
    @Inject(DOCUMENT) private document: any,
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {
    // 4. Create a Portal from the InterstitialContainerComponent
    this.interstitialContainerPortal = new ComponentPortal(InterstitialContainerComponent);

    // 5. Create a PortalHost with document.body as its anchor element
    this.bodyPortalHost = new DomPortalHost(document.body, this.componentFactoryResolver, this.appRef, this.injector);
  }

  show() {
    // 6. Attach the Portal to the PortalHost.
    const componentRef: ComponentRef<InterstitialContainerComponent> =
      this.bodyPortalHost.attach(this.interstitialContainerPortal);

    // 6a. Subscribe to the component's `close` event
    componentRef.instance.close.subscribe(() => this.hide());
  }

  hide() {
    // 7. Detach the Portal from the PortalHost
    this.bodyPortalHost.detach();
  }

}
