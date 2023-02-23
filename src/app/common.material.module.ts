import { NgModule } from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    imports: [
      MatToolbarModule,
      MatSidenavModule,
      MatDividerModule,
      MatBadgeModule,
      MatInputModule,
      MatMenuModule,
      MatGridListModule,
      MatListModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
    ],
    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatDividerModule,
        MatBadgeModule,
        MatInputModule,
        MatMenuModule,
        MatGridListModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
    ]
  })
  export class CommonMaterialModule { }