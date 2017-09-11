import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentsComponent } from './documents.component';
import { DocumentsCreateComponent } from './documents-create.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Documentos'
    },
    component: DocumentsComponent,
    children: [
      {
        path: 'create',
        component: DocumentsCreateComponent,
        data: {
          title: 'Crear Documento'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule {}
