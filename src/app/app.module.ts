import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import { UserLoginComponent } from './user-login/user-login.component';

import {MatInputModule} from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';

import { VideoPlayerComponent } from './video-player/video-player.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { GoogleAuthComponent } from './google-auth/google-auth.component';
import { SlideViewComponent } from './slide-view/slide-view.component';

// doc viewer
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { UploadDataComponent } from './upload-data/upload-data.component';
import { SlidesTabComponent } from './slides-tab/slides-tab.component';
import { SlidePageComponent } from './slide-page/slide-page.component';



@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    VideoPlayerComponent,
    GoogleAuthComponent,
    SlideViewComponent,
    UploadDataComponent,
    SlidesTabComponent,
    SlidePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatBadgeModule,
    MatInputModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    NgxDocViewerModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
