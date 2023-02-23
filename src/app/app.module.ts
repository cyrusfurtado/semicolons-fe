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

import { CommonMaterialModule } from './common.material.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptorService } from './app-interceptor.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    GoogleAuthComponent,
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
  },
  // required for custom icons for the stepper
  {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
