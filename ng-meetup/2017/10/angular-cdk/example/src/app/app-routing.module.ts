import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScrollExampleComponent } from './scroll-example/scroll-example.component';

const routes: Routes = [
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
