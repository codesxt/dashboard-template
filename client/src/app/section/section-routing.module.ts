import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Section1Component } from './section1.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Secciones'
    },
    children: [
      {
        path: 'section1',
        component: Section1Component,
        data: {
          title: 'Sección 1'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule {}
