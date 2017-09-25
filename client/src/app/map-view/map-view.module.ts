import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { MapViewComponent } from './map-view.component';

import { MapViewRoutingModule } from './map-view-routing.module';

import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    MapViewRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule,
    AgmCoreModule
  ],
  declarations: [
    MapViewComponent
  ]
})
export class MapViewModule { }
