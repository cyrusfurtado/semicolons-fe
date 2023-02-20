import { NgModule } from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [
      MatGridListModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
    ],
    exports: [
        MatGridListModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
    ]
  })
  export class CommonMaterialModule { }