import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpColdComponent } from './http-cold/http-cold.component';
import { HttpHotComponent } from './http-hot/http-hot.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'http-hot',
    component: HttpHotComponent
  },
  {
    path: 'http-cold',
    component: HttpColdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
