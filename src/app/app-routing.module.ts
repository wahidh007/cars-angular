import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './car/apropos/apropos.component';
import { AuthComponent } from './car/auth/auth.component';
import { CarDetailsComponent } from './car/car-details/car-details.component';
import { CarOverviewComponent } from './car/car-overview/car-overview.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path: '', component: CarOverviewComponent, pathMatch: 'full', canActivate: [AuthGuardService]},
  {path: 'carsList', component: CarOverviewComponent, canActivate: [AuthGuardService]},
  {path: 'apropos', component: AproposComponent, canActivate: [AuthGuardService]},
  {path: 'car-detail/:id', component: CarDetailsComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: AuthComponent},
  {path: '**', redirectTo: '/carsList'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
