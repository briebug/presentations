import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreakpointExampleComponent } from './breakpoint-example/breakpoint-example.component';
import { ScrollExampleComponent } from './scroll-example/scroll-example.component';

const routes: Routes = [
  {
    path: 'breakpoint',
    component: BreakpointExampleComponent
  },
  {
    path: 'scroll',
    component: ScrollExampleComponent
  },
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
