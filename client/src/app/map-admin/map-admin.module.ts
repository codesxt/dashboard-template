import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { MapAdminComponent } from './map-admin.component';

import { MapAdminRoutingModule } from './map-admin-routing.module';

import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    MapAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule,
    AgmCoreModule
  ],
  declarations: [
    MapAdminComponent
  ]
})
export class MapAdminModule { }
