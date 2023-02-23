import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonMaterialModule } from './common.material.module';

import { LandingComponent } from './landing/landing.component';
import { NotesComponent } from './notes/notes.component';
import { SlideComponent } from './slide/slide.component';
import { SummaryComponent } from './summary/summary.component';
import { VideoComponent } from './video/video.component';
// import { FinalComponent } from './final/final.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UploadDataComponent } from './upload-data/upload-data.component';

const routes: Routes = [
  {
  path: 'landing',
  component: LandingComponent
},
{
  path: 'slides',
  component: SlideComponent
},
{
  path: 'videos',
  component: VideoComponent
},
{
  path: 'meet-notes',
  component: NotesComponent
},
{
  path: 'test-cases',
  component: SummaryComponent
},
// {
//   path: 'final',
//   component: FinalComponent
// },
{
  path: 'login',
  component: UserLoginComponent,
  outlet: 'global'
},
{
  path: '',
  redirectTo: 'landing',
  pathMatch: 'full'
},
{
  path: 'upload',
  component: UploadDataComponent,
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
