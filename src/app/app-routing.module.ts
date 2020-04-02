import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { InvalidPageComponent } from './layout/invalid-page/invalid-page.component';
import { LoginComponent } from './layout/login/login.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'content',
    component: ContentLayoutComponent,
  }, {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  }, {
    path: '**',
    component: InvalidPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
