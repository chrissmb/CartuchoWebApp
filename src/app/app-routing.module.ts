import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
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
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    children: [
      {
        path: 'cartucho',
        loadChildren: () => import('./modules/cartucho/cartucho.module').then(m => m.CartuchoModule),
      },
      {
        path: 'departamento',
        loadChildren: () => import('./modules/departamento/departamento.module').then(m => m.DepartamentoModule),
      }
    ]
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
