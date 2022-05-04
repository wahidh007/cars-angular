import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './car/apropos/apropos.component';
import { CarDetailsComponent } from './car/car-details/car-details.component';
import { CarOverviewComponent } from './car/car-overview/car-overview.component';

const routes: Routes = [
  {path: '', component: CarOverviewComponent},
  {path: 'carsList', component: CarOverviewComponent},
  {path: 'apropos', component: AproposComponent},
  {path: 'car-detail/:id', component: CarDetailsComponent},
  {path: '**', redirectTo: '/carsList'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
