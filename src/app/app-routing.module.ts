import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './data/guards/auth.guard';
import { AccountancyListComponent } from './layers/accountancy-list/accountancy-list.component';
import { LoginComponent } from './layers/login/login.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
