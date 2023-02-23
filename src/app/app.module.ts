import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserLoginComponent } from './user-login/user-login.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { GoogleAuthComponent } from './google-auth/google-auth.component';

// doc viewer
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { UploadDataComponent } from './upload-data/upload-data.component';

import { CommonMaterialModule } from './common.material.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptorService } from './app-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    GoogleAuthComponent,
    UploadDataComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDocViewerModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
