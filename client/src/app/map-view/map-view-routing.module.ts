import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapViewComponent } from './map-view.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Vista de Mapa'
    },
    component: MapViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MapViewRoutingModule {}
