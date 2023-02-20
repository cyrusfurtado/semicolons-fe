import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonMaterialModule } from './common.material.module';

import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{
  path: 'landing/home',
  component: LandingComponent
},{
  path: '',
  redirectTo: 'landing/home',
  pathMatch: 'full'
},
{
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
