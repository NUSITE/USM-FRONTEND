import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsmDasboardComponent } from './usm-dasboard/usm-dasboard.component';
import { UsmLoginComponent } from './usm-login/usm-login.component';
import { UsmRegisterComponent } from './usm-register/usm-register.component';

const routes: Routes = [
  {
    path: 'login', component: UsmLoginComponent
  },
  {
    path: 'register', component: UsmRegisterComponent
  },
  {
    path: 'dashboard', component: UsmDasboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
