import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonMaterialModule } from './common.material.module';

import { LandingComponent } from './landing/landing.component';
import { NotesComponent } from './notes/notes.component';
import { ScanComponent } from './scan/scan.component';
import { SummaryComponent } from './summary/summary.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FinalComponent } from './final/final.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UploadDataComponent } from './upload-data/upload-data.component';
import { SlidePageComponent } from './slide-page/slide-page.component';

const routes: Routes = [{
  path: 'landing',
  component: LandingComponent
},
{
  path: 'notes',
  component: NotesComponent
},{
  path: 'scan',
  component: ScanComponent
},
{
  path: 'summary',
  component: SummaryComponent
},{
  path: 'presentation',
  component: PresentationComponent
},{
  path: 'final',
  component: FinalComponent
},{
  path: '',
  redirectTo: 'landing',
  pathMatch: 'full'
},
{
  path: 'login',
  component: UserLoginComponent
},
{
  path: 'upload',
  component: UploadDataComponent,
},
{
  path: 'slides',
  component: SlidePageComponent,
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
