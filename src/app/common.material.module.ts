import { NgModule } from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [
      MatGridListModule,
      MatListModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
    ],
    exports: [
        MatGridListModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
    ]
  })
  export class CommonMaterialModule { }