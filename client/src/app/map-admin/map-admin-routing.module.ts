import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapAdminComponent } from './map-admin.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Administración del Mapa'
    },
    component: MapAdminComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MapAdminRoutingModule {}
