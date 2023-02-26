import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './data/guards/auth.guard';
import { AccountancyListComponent } from './layers/accountancy-list/accountancy-list.component';
import { LoginComponent } from './layers/login/login.component';
import { MovementFormComponent } from './layers/movement-form/movement-form.component';
import { MovementListComponent } from './layers/movement-list/movement-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/accountancies', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'accountancies',
    children: [
      {
        path: '',
        component: AccountancyListComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'movements',
    children: [
      {
        path: '',
        component: MovementListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':movementId',
        component: MovementFormComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'forms',
    children: [
      {
        path: 'movement',
        component: MovementFormComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
